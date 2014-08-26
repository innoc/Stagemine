/*
 * Block (for jQuery)
 * version: 1.2 (05/05/2008)
 * @requires jQuery v1.2 or later
 *
 * Examples at http://famspam.com/block/
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2007, 2008 Chris Wanstrath [ chris@ozmm.org ]
 *
 * Usage:
 *
 *  jQuery(document).ready(function() {
 *    jQuery('a[rel*=block]').block()
 *  })
 *
 *  <a href="#terms" rel="block">Terms</a>
 *    Loads the #terms div in the block
 *
 *  <a href="terms.html" rel="block">Terms</a>
 *    Loads the terms.html page in the block
 *
 *  <a href="terms.png" rel="block">Terms</a>
 *    Loads the terms.png image in the block
 *
 *
 *  You can also use it programmatically:
 *
 *    jQuery.block('some html')
 *    jQuery.block('some html', 'my-groovy-style')
 *
 *  The above will open a block with "some html" as the content.
 *
 *    jQuery.block(function($) {
 *      $.get('blah.html', function(data) { $.block(data) })
 *    })
 *
 *  The above will show a loading screen before the passed function is called,
 *  allowing for a better ajaxy experience.
 *
 *  The block function can also display an ajax page, an image, or the contents of a div:
 *
 *    jQuery.block({ ajax: 'remote.html' })
 *    jQuery.block({ ajax: 'remote.html' }, 'my-groovy-style')
 *    jQuery.block({ image: 'stairs.jpg' })
 *    jQuery.block({ image: 'stairs.jpg' }, 'my-groovy-style')
 *    jQuery.block({ div: '#block' })
 *    jQuery.block({ div: '#block' }, 'my-groovy-style')
 *
 *  Want to close the block?  Trigger the 'close.block' document event:
 *
 *    jQuery(document).trigger('close.block')
 *
 *  Block also has a bunch of other hooks:
 *
 *    loading.block
 *    beforeReveal.block
 *    reveal.block (aliased as 'afterReveal.block')
 *    init.block
 *    afterClose.block
 *
 *  Simply bind a function to any of these hooks:
 *
 *   $(document).bind('reveal.block', function() { ...stuff to do after the block and contents are revealed... })
 *
 */

(function($) {
  $.block = function(data, klass) {
    $.block.loading()

    if (data.ajax) fillBlockFromAjax(data.ajax, klass)
    else if (data.image) fillBlockFromImage(data.image, klass)
    else if (data.div) fillBlockFromHref(data.div, klass)
    else if ($.isFunction(data)) data.call($)
    else $.block.reveal(data, klass)
  }

  /*
   * Public, $.block methods
   */

  $.extend($.block, {
    settings: {
      opacity      : 0.5,
      overlay      : true,
 	  loadingImage : '../../assets/ajax-loader.gif',
      closeImage   : '../../assets/regcloselabel.png',
      imageTypes   : [ 'png', 'jpg', 'jpeg', 'gif' ],
      blockHtml  : '\
    <div id="block" style="display:none;"> \
      <div class="popup"> \
        <div class="popcontent"> \
        </div> \
        <a href="#" class="close"><img src="../../assets/closelabel.png" title="close" class="close_image" /></a> \
      </div> \
    </div>'
    },

    loading: function() {
      init()
      if ($('#block .loading').length == 1) return true
      showOverlay()

      $('#block .popcontent').empty()
      $('#block .body').children().hide().end().
        append('<div class="loading"><img src="'+$.block.settings.loadingImage+'"/></div>')

      $('#block').css({
        top:	getPageScroll()[1] + (getPageHeight() / 10),
        left:	$(window).width() / 2 - 205
      }).show()

      $(document).bind('keydown.block', function(e) {
        if (e.keyCode == 27) $.block.close()
        return true
      })
      $(document).trigger('loading.block')
    },

    reveal: function(data, klass) {
      $(document).trigger('beforeReveal.block')
      if (klass) $('#block .popcontent').addClass(klass)
      $('#block .popcontent').append(data)
      $('#block .loading').remove()
      $('#block .body').children().fadeIn('normal')
      $('#block').css('left', $(window).width() / 2 - ($('#block .popup').width() / 2))
      $(document).trigger('reveal.block').trigger('afterReveal.block')
    },

    close: function() {
      $(document).trigger('close.block')
      return false
    }
  })

  /*
   * Public, $.fn methods
   */

  $.fn.block = function(settings) {
    if ($(this).length == 0) return

    init(settings)

    function clickHandler() {
      $.block.loading(true)

      // support for rel="block.inline_popup" syntax, to add a class
      // also supports deprecated "block[.inline_popup]" syntax
      var klass = this.rel.match(/block/)
      if (klass) klass = klass[1]

      fillBlockFromHref(this.href, klass)
      return false
    }

    return this.bind('click.block', clickHandler)
  }

  /*
   * Private methods
   */

  // called one time to setup block on this page
  function init(settings) {
    if ($.block.settings.inited) return true
    else $.block.settings.inited = true

    $(document).trigger('init.block')
    makeCompatible()

    var imageTypes = $.block.settings.imageTypes.join('|')
    $.block.settings.imageTypesRegexp = new RegExp('\.(' + imageTypes + ')$', 'i')

    if (settings) $.extend($.block.settings, settings)
    $('body').append($.block.settings.blockHtml)

    var preload = [ new Image(), new Image() ]
    preload[0].src = $.block.settings.closeImage
    preload[1].src = $.block.settings.loadingImage

    $('#block').find('.b:first, .bl').each(function() {
      preload.push(new Image())
      preload.slice(-1).src = $(this).css('background-image').replace(/url\((.+)\)/, '$1')
    })

    $('#block .close').click($.block.close)
    $('#block .close_image').attr('src', $.block.settings.closeImage)
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
    var $s = $.block.settings

    $s.loadingImage = $s.loading_image || $s.loadingImage
    $s.closeImage = $s.close_image || $s.closeImage
    $s.imageTypes = $s.image_types || $s.imageTypes
    $s.blockHtml = $s.block_html || $s.blockHtml
  }

  // Figures out what you want to display and displays it
  // formats are:
  //     div: #id
  //   image: blah.extension
  //    ajax: anything else
  function fillBlockFromHref(href, klass) {
    // div
    if (href.match(/#/)) {
      var url    = window.location.href.split('#')[0]
      var target = href.replace(url,'')
      if (target == '#') return
      $.block.reveal($(target).html(), klass)

    // image
    } else if (href.match($.block.settings.imageTypesRegexp)) {
      fillBlockFromImage(href, klass)
    // ajax
    } else {
      fillBlockFromAjax(href, klass)
    }
  }

  function fillBlockFromImage(href, klass) {
    var image = new Image()
    image.onload = function() {
      $.block.reveal('<div class="image"><img src="' + image.src + '" /></div>', klass)
    }
    image.src = href
  }

  function fillBlockFromAjax(href, klass) {
    $.get(href, function(data) { $.block.reveal(data, klass) })
  }

  function skipOverlay() {
    return $.block.settings.overlay == false || $.block.settings.opacity === null
  }

  function showOverlay() {
    if (skipOverlay()) return

    if ($('#block_overlay').length == 0)
      $("body").append('<div id="block_overlay" class="block_hide"></div>')

    $('#block_overlay').hide().addClass("block_overlayBG")
      .css('opacity', $.block.settings.opacity)
      .fadeIn(200)
    return false
  }

  function hideOverlay() {
    if (skipOverlay()) return

    $('#block_overlay').fadeOut(200, function(){
      $("#block_overlay").removeClass("block_overlayBG")
      $("#block_overlay").addClass("block_hide")
      $("#block_overlay").remove()
    })

    return false
  }

  /*
   * Bindings
   */

  $(document).bind('close.block', function() {
    $(document).unbind('keydown.block')
    $('#block').fadeOut(function() {
      $('#block .popcontent').removeClass().addClass('popcontent')
      $('#block .loading').remove()
      $(document).trigger('afterClose.block')
    })
    hideOverlay()
  })

})(jQuery);


