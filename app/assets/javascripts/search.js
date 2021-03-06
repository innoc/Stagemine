$(document).ready(function(){$.widget("ui.autocomplete",$.ui.autocomplete,{options:{renderItem:null,renderMenu:null},_renderItem:function(e,s){return $.isFunction(this.options.renderItem)?this.options.renderItem(e,s):this._super(e,s)},_renderMenu:function(e,s){$.isFunction(this.options.renderMenu)&&this.options.renderMenu(e,s),this._super(e,s)}});var e=function(e){$(e).addClass("dropdown-menu")},s=function(e,s){return $("<li>").append($('<a href="/portfolio?id='+s.id+'">').html("<span class='search_float_right'><img src='"+s.img+"'></span> "+s.first+"  "+s.last+" ")).append("<span class='search_username'><br /> "+s.username+"</span>").appendTo(e)},n=function(e,s){return $("<li>").append("<span class='search_float_right'><img src='"+s.img+"'> </span> <span class='message_suggestion_class'>"+s.first+"  "+s.last+"</span> ").append("<span class='search_username'><br /> "+s.username+"</span>").appendTo(e)};$(".search_field").autocomplete({source:"/search_suggestions",renderMenu:e,renderItem:s}),$(".message_search_field").autocomplete({source:"/search_suggestions?flag=m",renderMenu:e,renderItem:n})});$(document).ready(function(){ 
  $.widget( "ui.autocomplete", $.ui.autocomplete, {
      options: {
         renderItem: null,
         renderMenu: null
      },
       
      _renderItem: function( ul, item ) {
         if ( $.isFunction( this.options.renderItem ) )
            return this.options.renderItem( ul, item );
         else
            return this._super( ul, item );
      },

      _renderMenu: function( ul, items ) {

         if ( $.isFunction( this.options.renderMenu ) ) {
            this.options.renderMenu( ul, items );
         }
         this._super( ul, items );
      },

   });

    var acMenu_Base = function( ul, items ) {
      $( ul ).addClass( 'dropdown-menu' );
    },

    acItem_Italicize = function( ul, item ) {    
      return $( '<li>' )
          .append( $( '<a href="/portfolio?id='+item.id+'">' ).html("<span class='search_float_right'><img src='" + item.img + "'></span> " + item.first +"  "+ item.last +" " ))
          .append("<span class='search_username'><br /> "+ item.username +"</span>")
          .appendTo( ul );
    },
    acItem_Message_Italicize = function( ul, item ) { 
      return $( '<li>' )          
          .append("<span class='search_float_right'><img src='" + item.img + "'> </span> <span class='message_suggestion_class'>" + item.first +"  "+ item.last +"</span> " )
          .append("<span class='search_username'><br /> "+ item.username +"</span>")
          .appendTo( ul );
    },
    acItem_Bold = function( ul, item ) {
       return $( '<li>' )
          .append( $( '<a>' ).html( '<b>'+item.label+'</b>' ) )
          .appendTo( ul );
    };

   $( '.search_field' ).autocomplete({
    source: "/search_suggestions",
    renderMenu: acMenu_Base,
    renderItem: acItem_Italicize,
   });  

   $( '.message_search_field' ).autocomplete({
      source: "/search_suggestions?flag=m",
      renderMenu: acMenu_Base,
      renderItem: acItem_Message_Italicize,
   });   
});  
