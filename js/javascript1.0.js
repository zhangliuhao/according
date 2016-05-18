;(function(){
	$.fn.extend({
		"according":function(opt){
	  var DEFAULT={"start":0}
	  var option=$.extend({},DEFAULT,opt);
	  var oldnum=opt.start;
	  //alert(oldnum)
	  //console.log(option)
	  this.each(function(){
	  var obj=$(this);
	  	init();
	  	//console.log(obj)
	  	function init(){
	  	obj.children(".content").hide();
	  	obj.children(".content").eq(option.start).show();
	  	obj.children(":header").eq(option.start).addClass("active");
	  	}
	  	obj.children(":header").each(function(){
	  		
	  $(this).click(function(){
	  	 var ind=obj.children(":header").index($(this));
	  	 if(ind==oldnum){return}
	  	obj.children(":header.active").removeClass("active");
	  	obj.children(":header").eq(ind).addClass("active");
	  	obj.children(".content:visible").slideUp();
	  	obj.children(".content").eq(ind).slideDown();
	  	oldnum=ind;	
	  		})
	  	})//       each header
	  })     //according end  
	}     //each end
		
	})      //extend
})(jQuery)
