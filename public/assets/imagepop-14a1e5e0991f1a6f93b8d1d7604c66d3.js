!function(e){function i(i){if(e.imagepop.settings.inited)return!0;e.imagepop.settings.inited=!0,e(document).trigger("init.imagepop"),p();var o=e.imagepop.settings.imageTypes.join("|");e.imagepop.settings.imageTypesRegexp=new RegExp(".("+o+")$","i"),i&&e.extend(e.imagepop.settings,i),e("body").append(e.imagepop.settings.imagepopHtml);var a=[new Image,new Image];a[0].src=e.imagepop.settings.closeImage,a[1].src=e.imagepop.settings.loadingImage,e("#imagepop").find(".b:first, .bl").each(function(){a.push(new Image),a.slice(-1).src=e(this).css("background-image").replace(/url\((.+)\)/,"$1")}),e("#imagepop .close").click(e.imagepop.close),e("#imagepop .close_image").attr("src",e.imagepop.settings.closeImage)}function o(){var e,i;return self.pageYOffset?(i=self.pageYOffset,e=self.pageXOffset):document.documentElement&&document.documentElement.scrollTop?(i=document.documentElement.scrollTop,e=document.documentElement.scrollLeft):document.body&&(i=document.body.scrollTop,e=document.body.scrollLeft),new Array(e,i)}function a(){var e;return self.innerHeight?e=self.innerHeight:document.documentElement&&document.documentElement.clientHeight?e=document.documentElement.clientHeight:document.body&&(e=document.body.clientHeight),e}function p(){var i=e.imagepop.settings;i.loadingImage=i.loading_image||i.loadingImage,i.closeImage=i.close_image||i.closeImage,i.imageTypes=i.image_types||i.imageTypes,i.imagepopHtml=i.imagepop_html||i.imagepopHtml}function n(i,o){if(i.match(/#/)){var a=window.location.href.split("#")[0],p=i.replace(a,"");if("#"==p)return;e.imagepop.reveal(e(p).html(),o)}else i.match(e.imagepop.settings.imageTypesRegexp)?t(i,o):g(i,o)}function t(i,o){var a=new Image;a.onload=function(){e.imagepop.reveal('<div class="image"><img src="'+a.src+'" /></div>',o)},a.src=i}function g(i,o){e.get(i,function(i){e.imagepop.reveal(i,o)})}function m(){return 0==e.imagepop.settings.overlay||null===e.imagepop.settings.opacity}function s(){return m()?void 0:(0==e("#imagepop_overlay").length&&e("body").append('<div id="imagepop_overlay" class="imagepop_hide"></div>'),e("#imagepop_overlay").hide().addClass("imagepop_overlayBG").css("opacity",e.imagepop.settings.opacity).fadeIn(200),!1)}function l(){return m()?void 0:(e("#imagepop_overlay").fadeOut(200,function(){e("#imagepop_overlay").removeClass("imagepop_overlayBG"),e("#imagepop_overlay").addClass("imagepop_hide"),e("#imagepop_overlay").remove()}),!1)}e.imagepop=function(i,o){e.imagepop.loading(),i.ajax?g(i.ajax,o):i.image?t(i.image,o):i.div?n(i.div,o):e.isFunction(i)?i.call(e):e.imagepop.reveal(i,o)},e.extend(e.imagepop,{settings:{opacity:.5,overlay:!0,loadingImage:"../../assets/loading.gif",closeImage:"../../assets/close.png",imageTypes:["png","jpg","jpeg","gif"],imagepopHtml:'    <div id="imagepop" style="display:none;">       <div class="popup">         <div class="popcontent">         </div>         <a href="#" class="close"><img src="../../assets/closelabel.png" title="close" class="close_image" /></a>       </div>     </div>'},loading:function(){return i(),1==e("#imagepop .loading").length?!0:(s(),e("#imagepop .popcontent").empty(),e("#imagepop .body").children().hide().end().append('<div class="loading"><img src="'+e.imagepop.settings.loadingImage+'"/></div>'),e("#imagepop").css({top:o()[1]+a()/10,left:e(window).width()/2-205}).show(),e(document).bind("keydown.imagepop",function(i){return 27==i.keyCode&&e.imagepop.close(),!0}),void e(document).trigger("loading.imagepop"))},reveal:function(i,o){e(document).trigger("beforeReveal.imagepop"),o&&e("#imagepop .popcontent").addClass(o),e("#imagepop .popcontent").append(i),e("#imagepop .loading").remove(),e("#imagepop .body").children().fadeIn("normal"),e("#imagepop").css("left",e(window).width()/2-e("#imagepop .popup").width()/2),e(document).trigger("reveal.imagepop").trigger("afterReveal.imagepop")},close:function(){return e(document).trigger("close.imagepop"),!1}}),e.fn.imagepop=function(o){function a(){e.imagepop.loading(!0);var i=this.rel.match(/imagepop/);return i&&(i=i[1]),n(this.href,i),!1}if(0!=e(this).length)return i(o),this.bind("click.imagepop",a)},e(document).bind("close.imagepop",function(){e(document).unbind("keydown.imagepop"),e("#imagepop").fadeOut(function(){e("#imagepop .popcontent").removeClass().addClass("popcontent"),e("#imagepop .loading").remove(),e(document).trigger("afterClose.imagepop")}),l()})}(jQuery);
