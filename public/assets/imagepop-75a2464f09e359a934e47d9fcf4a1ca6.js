/*
 * Imagepop (for jQuery)
 * version: 1.2 (05/05/2008)
 * @requires jQuery v1.2 or later
 *
 * Examples at http://famspam.com/imagepop/
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2007, 2008 Chris Wanstrath [ chris@ozmm.org ]
 *
 * Usage:
 *
 *  jQuery(document).ready(function() {
 *    jQuery('a[rel*=imagepop]').imagepop()
 *  })
 *
 *  <a href="#terms" rel="imagepop">Terms</a>
 *    Loads the #terms div in the imagepop
 *
 *  <a href="terms.html" rel="imagepop">Terms</a>
 *    Loads the terms.html page in the imagepop
 *
 *  <a href="terms.png" rel="imagepop">Terms</a>
 *    Loads the terms.png image in the imagepop
 *
 *
 *  You can also use it programmatically:
 *
 *    jQuery.imagepop('some html')
 *    jQuery.imagepop('some html', 'my-groovy-style')
 *
 *  The above will open a imagepop with "some html" as the content.
 *
 *    jQuery.imagepop(function($) {
 *      $.get('blah.html', function(data) { $.imagepop(data) })
 *    })
 *
 *  The above will show a loading screen before the passed function is called,
 *  allowing for a better ajaxy experience.
 *
 *  The imagepop function can also display an ajax page, an image, or the contents of a div:
 *
 *    jQuery.imagepop({ ajax: 'remote.html' })
 *    jQuery.imagepop({ ajax: 'remote.html' }, 'my-groovy-style')
 *    jQuery.imagepop({ image: 'stairs.jpg' })
 *    jQuery.imagepop({ image: 'stairs.jpg' }, 'my-groovy-style')
 *    jQuery.imagepop({ div: '#imagepop' })
 *    jQuery.imagepop({ div: '#imagepop' }, 'my-groovy-style')
 *
 *  Want to close the imagepop?  Trigger the 'close.imagepop' document event:
 *
 *    jQuery(document).trigger('close.imagepop')
 *
 *  Imagepop also has a bunch of other hooks:
 *
 *    loading.imagepop
 *    beforeReveal.imagepop
 *    reveal.imagepop (aliased as 'afterReveal.imagepop')
 *    init.imagepop
 *    afterClose.imagepop
 *
 *  Simply bind a function to any of these hooks:
 *
 *   $(document).bind('reveal.imagepop', function() { ...stuff to do after the imagepop and contents are revealed... })
 *
 */


(function($) {
  $.imagepop = function(data, klass) {
    $.imagepop.loading()

    if (data.ajax) fillImagepopFromAjax(data.ajax, klass)
    else if (data.image) fillImagepopFromImage(data.image, klass)
    else if (data.div) fillImagepopFromHref(data.div, klass)
    else if ($.isFunction(data)) data.call($)
    else $.imagepop.reveal(data, klass)
  }

  /*
   * Public, $.imagepop methods
   */

  $.extend($.imagepop, {
    settings: {
      opacity      : 0.5,
      overlay      : true,
 	  loadingImage : '../../assets/loading.gif',
      closeImage   : '../../assets/close.png',
      imageTypes   : [ 'png', 'jpg', 'jpeg', 'gif' ],
      imagepopHtml  : '\
    <div id="imagepop" style="display:none;"> \
      <div class="popup"> \
        <div class="popcontent"> \
        </div> \
        <a href="#" class="close"><img src="../../assets/closelabel.png" title="close" class="close_image" /></a> \
      </div> \
    </div>'
    },

    loading: function() {
      init()
      if ($('#imagepop .loading').length == 1) return true
      showOverlay()

      $('#imagepop .popcontent').empty()
      $('#imagepop .body').children().hide().end().
        append('<div class="loading"><img src="'+$.imagepop.settings.loadingImage+'"/></div>')

      $('#imagepop').css({
        top:	getPageScroll()[1] + (getPageHeight() / 10),
        left:	$(window).width() / 2 - 205
      }).show()

      $(document).bind('keydown.imagepop', function(e) {
        if (e.keyCode == 27) $.imagepop.close()
        return true
      })
      $(document).trigger('loading.imagepop')
    },

    reveal: function(data, klass) {
      $(document).trigger('beforeReveal.imagepop')
      if (klass) $('#imagepop .popcontent').addClass(klass)
      $('#imagepop .popcontent').append(data)
      $('#imagepop .loading').remove()
      $('#imagepop .body').children().fadeIn('normal')
      $('#imagepop').css('left', $(window).width() / 2 - ($('#imagepop .popup').width() / 2))
      $(document).trigger('reveal.imagepop').trigger('afterReveal.imagepop')
    },

    close: function() {
      $(document).trigger('close.imagepop')
      return false
    }
  })

  /*
   * Public, $.fn methods
   */

  $.fn.imagepop = function(settings) {
    if ($(this).length == 0) return

    init(settings)

    function clickHandler() {
      $.imagepop.loading(true)

      // support for rel="imagepop.inline_popup" syntax, to add a class
      // also supports deprecated "imagepop[.inline_popup]" syntax
      var klass = this.rel.match(/imagepop/)
      if (klass) klass = klass[1]

      fillImagepopFromHref(this.href, klass)
      return false
    }

    return this.bind('click.imagepop', clickHandler)
  }

  /*
   * Private methods
   */

  // called one time to setup imagepop on this page
  function init(settings) {
    if ($.imagepop.settings.inited) return true
    else $.imagepop.settings.inited = true

    $(document).trigger('init.imagepop')
    makeCompatible()

    var imageTypes = $.imagepop.settings.imageTypes.join('|')
    $.imagepop.settings.imageTypesRegexp = new RegExp('\.(' + imageTypes + ')$', 'i')

    if (settings) $.extend($.imagepop.settings, settings)
    $('body').append($.imagepop.settings.imagepopHtml)

    var preload = [ new Image(), new Image() ]
    preload[0].src = $.imagepop.settings.closeImage
    preload[1].src = $.imagepop.settings.loadingImage

    $('#imagepop').find('.b:first, .bl').each(function() {
      preload.push(new Image())
      preload.slice(-1).src = $(this).css('background-image').replace(/url\((.+)\)/, '$1')
    })

    $('#imagepop .close').click($.imagepop.close)
    $('#imagepop .close_image').attr('src', $.imagepop.settings.closeImage)
  }

  // getPageScroll() by quirksmode.com
  function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }
    return new Array(xScroll,yScroll)
  }

  // Adapted from getPageSize() by quirksmode.com
  function getPageHeight() {
    var windowHeight
    if (self.innerHeight) {	// all except Explorer
      windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
      windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
      windowHeight = document.body.clientHeight;
    }
    return windowHeight
  }

  // Backwards compatibility
  function makeCompatible() {
    var $s = $.imagepop.settings

    $s.loadingImage = $s.loading_image || $s.loadingImage
    $s.closeImage = $s.close_image || $s.closeImage
    $s.imageTypes = $s.image_types || $s.imageTypes
    $s.imagepopHtml = $s.imagepop_html || $s.imagepopHtml
  }

  // Figures out what you want to display and displays it
  // formats are:
  //     div: #id
  //   image: blah.extension
  //    ajax: anything else
  function fillImagepopFromHref(href, klass) {
    // div
    if (href.match(/#/)) {
      var url    = window.location.href.split('#')[0]
      var target = href.replace(url,'')
      if (target == '#') return
      $.imagepop.reveal($(target).html(), klass)

    // image
    } else if (href.match($.imagepop.settings.imageTypesRegexp)) {
      fillImagepopFromImage(href, klass)
    // ajax
    } else {
      fillImagepopFromAjax(href, klass)
    }
  }

  function fillImagepopFromImage(href, klass) {
    var image = new Image()
    image.onload = function() {
      $.imagepop.reveal('<div class="image"><img src="' + image.src + '" /></div>', klass)
    }
    image.src = href
  }

  function fillImagepopFromAjax(href, klass) {
    $.get(href, function(data) { $.imagepop.reveal(data, klass) })
  }

  function skipOverlay() {
    return $.imagepop.settings.overlay == false || $.imagepop.settings.opacity === null
  }

  function showOverlay() {
    if (skipOverlay()) return

    if ($('#imagepop_overlay').length == 0)
      $("body").append('<div id="imagepop_overlay" class="imagepop_hide"></div>')

    $('#imagepop_overlay').hide().addClass("imagepop_overlayBG")
      .css('opacity', $.imagepop.settings.opacity)
      .fadeIn(200)
    return false
  }

  function hideOverlay() {
    if (skipOverlay()) return

    $('#imagepop_overlay').fadeOut(200, function(){
      $("#imagepop_overlay").removeClass("imagepop_overlayBG")
      $("#imagepop_overlay").addClass("imagepop_hide")
      $("#imagepop_overlay").remove()
    })

    return false
  }

  /*
   * Bindings
   */

  $(document).bind('close.imagepop', function() {
    $(document).unbind('keydown.imagepop')
    $('#imagepop').fadeOut(function() {
      $('#imagepop .popcontent').removeClass().addClass('popcontent')
      $('#imagepop .loading').remove()
      $(document).trigger('afterClose.imagepop')
    })
    hideOverlay()
  })

})(jQuery);



