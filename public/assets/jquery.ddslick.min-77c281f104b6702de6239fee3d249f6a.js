!function(e){function d(e,d){var t=e.data("ddslick"),o=e.find(".dd-selected"),s=o.siblings(".dd-selected-value"),l=(e.find(".dd-options"),o.siblings(".dd-pointer"),e.find(".dd-option").eq(d)),a=l.closest("li"),c=t.settings,r=t.settings.data[d];e.find(".dd-option").removeClass("dd-option-selected"),l.addClass("dd-option-selected"),t.selectedIndex=d,t.selectedItem=a,t.selectedData=r,o.html(c.showSelectedHTML?(r.imageSrc?'<img class="dd-selected-image'+("right"==c.imagePosition?" dd-image-right":"")+'" src="'+r.imageSrc+'" />':"")+(r.text?'<label class="dd-selected-text">'+r.text+"</label>":"")+(r.description?'<small class="dd-selected-description dd-desc'+(c.truncateDescription?" dd-selected-description-truncated":"")+'" >'+r.description+"</small>":""):r.text),s.val(r.value),t.original.val(r.value),e.data("ddslick",t),i(e),n(e),"function"==typeof c.onSelected&&c.onSelected.call(this,t)}function t(d){var t=d.find(".dd-select"),i=t.siblings(".dd-options"),n=t.find(".dd-pointer"),s=i.is(":visible");e(".dd-click-off-close").not(i).slideUp(50),e(".dd-pointer").removeClass("dd-pointer-up"),s?(i.slideUp("fast"),n.removeClass("dd-pointer-up")):(i.slideDown("fast"),n.addClass("dd-pointer-up")),o(d)}function i(e){e.find(".dd-options").slideUp(50),e.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up")}function n(e){var d=e.find(".dd-select").css("height"),t=e.find(".dd-selected-description"),i=e.find(".dd-selected-image");t.length<=0&&i.length>0&&e.find(".dd-selected-text").css("lineHeight",d)}function o(d){d.find(".dd-option").each(function(){var t=e(this),i=t.css("height"),n=t.find(".dd-option-description"),o=d.find(".dd-option-image");n.length<=0&&o.length>0&&t.find(".dd-option-text").css("lineHeight",i)})}e.fn.ddslick=function(d){return s[d]?s[d].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof d&&d?void e.error("Method "+d+" does not exists."):s.init.apply(this,arguments)};var s={},l={data:[],keepJSONItemsOnTop:!1,width:260,height:null,background:"#eee",selectText:"",defaultSelectedIndex:null,truncateDescription:!0,imagePosition:"left",showSelectedHTML:!0,clickOffToClose:!0,onSelected:function(){}},a='<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"></span></div>',c='<ul class="dd-options"></ul>',r='<style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{ position:relative;}\u200b .dd-selected-text { font-weight:bold}\u200b</style>';e("#css-ddslick").length<=0&&e(r).appendTo("head"),s.init=function(i){var i=e.extend({},l,i);return this.each(function(){var n=e(this),o=n.data("ddslick");if(!o){{var s=[];i.data}n.find("option").each(function(){var d=e(this),t=d.data();s.push({text:e.trim(d.text()),value:d.val(),selected:d.is(":selected"),description:t.description,imageSrc:t.imagesrc})}),i.keepJSONItemsOnTop?e.merge(i.data,s):i.data=e.merge(s,i.data);var l=n,r=e('<div id="'+n.attr("id")+'"></div>');n.replaceWith(r),n=r,n.addClass("dd-container").append(a).append(c);var s=n.find(".dd-select"),p=n.find(".dd-options");p.css({width:i.width}),s.css({width:i.width,background:i.background}),n.css({width:i.width}),null!=i.height&&p.css({height:i.height,overflow:"auto"}),e.each(i.data,function(e,d){d.selected&&(i.defaultSelectedIndex=e),p.append('<li><a class="dd-option">'+(d.value?' <input class="dd-option-value" type="hidden" value="'+d.value+'" />':"")+(d.imageSrc?' <img class="dd-option-image'+("right"==i.imagePosition?" dd-image-right":"")+'" src="'+d.imageSrc+'" />':"")+(d.text?' <label class="dd-option-text">'+d.text+"</label>":"")+(d.description?' <small class="dd-option-description dd-desc">'+d.description+"</small>":"")+"</a></li>")});var f={settings:i,original:l,selectedIndex:-1,selectedItem:null,selectedData:null};if(n.data("ddslick",f),i.selectText.length>0&&null==i.defaultSelectedIndex)n.find(".dd-selected").html(i.selectText);else{var u=null!=i.defaultSelectedIndex&&i.defaultSelectedIndex>=0&&i.defaultSelectedIndex<i.data.length?i.defaultSelectedIndex:0;d(n,u)}n.find(".dd-select").on("click.ddslick",function(){t(n)}),n.find(".dd-option").on("click.ddslick",function(){d(n,e(this).closest("li").index())}),i.clickOffToClose&&(p.addClass("dd-click-off-close"),n.on("click.ddslick",function(e){e.stopPropagation()}),e("body").on("click",function(){e(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up")}))}})},s.select=function(t){return this.each(function(){t.index&&d(e(this),t.index)})},s.open=function(){return this.each(function(){var d=e(this),i=d.data("ddslick");i&&t(d)})},s.close=function(){return this.each(function(){var d=e(this),t=d.data("ddslick");t&&i(d)})},s.destroy=function(){return this.each(function(){var d=e(this),t=d.data("ddslick");if(t){var i=t.original;d.removeData("ddslick").unbind(".ddslick").replaceWith(i)}})}}(jQuery);