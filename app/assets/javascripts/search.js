$(document).ready(function(){
 
  $(document).ready(function(){
  
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
          
            //.html( "<img src='" + item.img + "'>" + "<br />" + item.first + " "+item.last+" | " + item.username) )


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
  
});  
  
  
});