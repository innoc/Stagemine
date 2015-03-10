function deleteComment(o,e){$("#"+o).hide(),$("."+e).mouseover(function(){$("#"+o).show()}),$("."+e).mouseout(function(){$("#"+o).hide()})}function commentDropdown(o,e,n,c){$("."+o).click(function(){$("."+e).toggle(),$("."+c).toggle()}),$("."+n).click(function(){$("."+e).toggle(),$("."+c).toggle()})}function settingJs(o){if("change-password"==o){$(".change-password__container").show(),$(".change-info__container").hide(),$(".user-info__container").hide();var e=".user-info",n=".change-info"}if("user-info"==o){$(".change-password__container").hide(),$(".change-info__container").hide(),$(".user-info__container").show();var e=".user-info",e=".change-password",n=".change-info"}if("change-info"==o){$(".change-password__container").hide(),$(".change-info__container").show(),$(".user-info__container").hide();var e=".user-info",e=".change-password",n=".user-info"}$("."+o).css("border-bottom","none"),$("."+o).css("color","black"),$("."+o).css("cursor","default"),$("."+o).css("background","white"),$(e).css("background","#eeeeee"),$(e).css("border-bottom","1px solid lightblue"),$(e).css("color","#2b6cc2"),$(e).css("cursor","pointer"),$(n).css("background","#eeeeee"),$(n).css("border-bottom","1px solid lightblue"),$(n).css("color","#2b6cc2"),$(n).css("cursor","pointer")}
$(document).ready(function(){ 
  $('a[rel*=block]').block();
  $('.stage-nav-click > ul').toggleClass('stage_interest_name js');
  $('.top_container_drop_down > ul').toggleClass('top_container_drop_down_list js');
  $('.stage-nav-click .js ul').hide();
  $('.top_container_drop_down .js ul').hide();
  $('.stage-nav-click .js').click(function(e) {
    $('.stage-nav-click .js ul').slideToggle(200);
    $('.stage-clicker').toggleClass('active');
    e.stopPropagation();
  });
  $('.top_container_drop_down .js').click(function(e) {
    $('.top_container_drop_down .js ul').slideToggle(200);
    $('.top_container_clicker').toggleClass('active');
    e.stopPropagation();
  });
  $(document).click(function() {
    if ($('.stage-nav-click .js ul').is(':visible')) {
      $('.stage-nav-click .js ul', this).slideUp();
      $('.stage-clicker').removeClass('active');
    }
    if ($('.top_container_drop_down .js ul').is(':visible')) {
      $('.top_container_drop_down .js ul', this).slideUp();
      $('.top_container_clicker').removeClass('active');
    }
  });
});