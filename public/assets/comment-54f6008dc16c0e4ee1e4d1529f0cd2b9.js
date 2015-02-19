function deleteComment(deleteId, commentClass) {    
  $("#"+deleteId+"").hide();
  $("."+commentClass+"").mouseover(function(){ 
    $("#"+deleteId+"").show();
  }); 

  $("."+commentClass+"").mouseout(function(){ 
    $("#"+deleteId+"").hide();
  });
}

function commentDropdown(addClass, toogleClass, cancelClass, formClass) {    
  $("."+addClass+"").click(function(){
  $("."+toogleClass+"").toggle();
  $("."+formClass+"").toggle();
  });

  $("."+cancelClass+"").click(function(){
  $("."+toogleClass+"").toggle();
  $("."+formClass+"").toggle();
  }); 
}

function settingJs(tab) {
  if(tab == "change-password"){ 
  	$(".change-password__container").show();
  	$(".change-info__container").hide();
  	$(".user-info__container").hide();
    var secondarytab1 = ".user-info";
    var secondarytab2 = ".change-info";
  }
  if(tab == "user-info"){
    $(".change-password__container").hide();
  	$(".change-info__container").hide();
  	$(".user-info__container").show();
    var secondarytab1 = ".user-info";
    var secondarytab1 = ".change-password";
    var secondarytab2 = ".change-info";
  }
	if(tab == "change-info"){ 
		$(".change-password__container").hide();
  	$(".change-info__container").show();
  	$(".user-info__container").hide();
    var secondarytab1 = ".user-info";
   	var secondarytab1 = ".change-password";
   	var secondarytab2 = ".user-info";
	}	
  $("."+tab+"").css("border-bottom", "none");
  $("."+tab+"").css("color", "black");
  $("."+tab+"").css("cursor", "default");
  $("."+tab+"").css("background", "white");
  $(secondarytab1).css("background", "#eeeeee")
  $(secondarytab1).css("border-bottom", "1px solid lightblue");
  $(secondarytab1).css("color", "#2b6cc2")
  $(secondarytab1).css("cursor", "pointer");
  $(secondarytab2).css("background", "#eeeeee")
  $(secondarytab2).css("border-bottom", "1px solid lightblue");
  $(secondarytab2).css("color", "#2b6cc2")
  $(secondarytab2).css("cursor", "pointer");
}


;
