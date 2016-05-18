     function slider(opt){
     var dom=opt.dom;
     var ul=$(dom+" .wrap>ul:eq(0)");
     var len=ul.children("li").length;
     var first=ul.children("li").get(0);
     var last=ul.children("li").get(len-1);
     var dis=$(first).width();      //动画的距离
     var index=1;                 //当前页
     var stop;
     //定义方法
     init();
     auto();
     bindDom();
     //初始化
     function init(){
     ul.append($(first).clone());
     ul.prepend($(last).clone());
     ul.css("left",dis*-1);	
     }//init end
     function goslider(){
     ul.animate({"left":(index*dis*-1)+"px"},500,anfn);	
     }//goslider  end
     function anfn(){        //如果是最后一张第7张
      if(index>=len+1){
      	ul.css("left",dis*-1);
      	index=1;
      } 
      if(index<=0){
      	ul.css("left",(dis*len+1)*-1);
      	index=len;
      }
      $(".contrl li.active").removeClass("active");
	  $(".contrl li:eq("+(index-1)+")").addClass("active");
     }//anfn  end
     function auto(){
      stop=setInterval(function(){
      	index++;
      	goslider();
      },2000)
     }// auto end
     function bindDom(){
     $(dom).hover(function(){
     	clearInterval(stop);
     },function(){
     	auto();
     })//hover  end

     $(".contrl li").click(function(){
     	var ind=$(".contrl li").index($(this));
     	index=ind+1;
     	goslider();
     })
     }  //bindDom  end
     }	
 