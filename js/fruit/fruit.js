/* 水果、蔬菜、肉禽、五谷杂粮 */
window.onload = function(){
	var more = document.getElementById("more");
	var openMore = document.getElementById("openMore");
	var moreContain = document.getElementById("moreContain");
	openMore.onclick = function() {
		if (more.style.display == "block") {
			more.style.display = "none";
			moreContain.style.display = "none";
		} else{
			more.style.display = "block";
			moreContain.style.display = "block";
		}
	}
	/* 图片轮播 */
	//获得slider插件对象
	var gallery = mui('.mui-slider');
	gallery.slider({
	  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	gallery.slider().gotoItem(0);//跳转到第index张图片，index从0开始；
	document.getElementById('toNewsHome').addEventListener('tap', function() {
	  //打开消息页面
	  mui.openWindow({
	    url: '../news/newsHome.html', 
	    id:'toNewsHome'
	  });
	});
	document.getElementById('toIndex').addEventListener('tap', function() {
	  //打开首页页面
	  mui.openWindow({
	    url: '../../index.html', 
	    id:'toIndex'
	  });
	});
	document.getElementById('toCalendar').addEventListener('tap', function() {
	  //打开日历页面
	  mui.openWindow({
	    url: '../news/calendar.html', 
	    id:'toCalendar'
	  });
	});
	mui.plusReady(function(){
		var self = plus.webview.currentWebview();
		var name = self.name;
		var fruitBtn = document.getElementById("fruitBtn");
		var vegetableBtn = document.getElementById("vegetableBtn");
		var rqBtn = document.getElementById("rqBtn");
		var cerealsBtn = document.getElementById("cerealsBtn");
		var firstcontain = document.getElementById("firstcontain");
		var secondcontain = document.getElementById("secondcontain");
		if (name == "toFruit") {							//水果
			fruitBtn.style.borderBottomColor = "#2AC845";
			fruitBtn.style.fontSize = "16px";
			fruitBtn.style.color = "#2AC845";
			$("#firstcontain").css("display","block");
			$("#firstcontain").siblings().css("display","none");
		}			
		if (name == "toVegetable") {						//蔬菜
			vegetableBtn.style.borderBottomColor = "#2AC845"; 
			vegetableBtn.style.fontSize = "16px";
			vegetableBtn.style.color = "#2AC845";
			$("#secondcontain").css("display","block");
			$("#secondcontain").siblings().css("display","none");
		}
		if (name == "toRQ") {								//肉禽
			rqBtn.style.borderBottomColor = "#2AC845";
			rqBtn.style.fontSize = "16px";
			rqBtn.style.color = "#2AC845";
    		$("#thirdcontain").css("display","block");
			$("#thirdcontain").siblings().css("display","none");
		}
		if (name == "toCereals") {							//五谷杂粮
			cerealsBtn.style.borderBottomColor = "#2AC845";
			cerealsBtn.style.fontSize = "16px";
			cerealsBtn.style.color = "#2AC845";
    		$("#forthcontain").css("display","block");
			$("#forthcontain").siblings().css("display","none");
		}
	});
	//导航的固定
	//console.log($("#shopListNav").offset().top);
	if ($("#shopListNav").offset().top <= 44) {
		$("#shopListNav").css({"position":"fixed","top":"44px","width":"100%","zIndex":"999"});
	}
	
	var mTop;
	var sTop;
	var result;
	/* tab切换  */
	var l = 0;  
    var r = 0;  
    var i = 0;  
    var touch;  
    var contain = document.getElementById("contain");  
    //通过点击事件切换  
    $("#fruitBtn").click(function(){  							//水果
        $(this).css({"border-bottom":"1px #2AC845 solid","font-size":"16px","color":"#2ac845"});  
        $("#vegetableBtn").css({"border-bottom":"1px #fff solid","font-size":"14px","color":"#000"});  
        $("#rqBtn").css({"border-bottom":"1px #fff solid","font-size":"14px","color":"#000"});
        $("#cerealsBtn").css({"border-bottom":"1px #fff solid","font-size":"14px","color":"#000"});
        $("#firstcontain").css("display","block");  
        $("#secondcontain").css("display","none");  
        $("#thirdcontain").css("display","none");
        $("#forthcontain").css("display","none");
        i = 0;  
    });  
    $("#vegetableBtn").click(function(){  						//蔬菜
        $(this).css({"border-bottom":"1px #2AC845 solid","font-size":"16px","color":"#2ac845"});  
        $("#fruitBtn").css({"border-bottom":"1px #fff solid","font-size":"14px","color":"#000"});  
        $("#rqBtn").css({"border-bottom":"1px #fff solid","font-size":"14px","color":"#000"});
        $("#cerealsBtn").css({"border-bottom":"1px #fff solid","font-size":"14px","color":"#000"});
        $("#firstcontain").css("display","none");  
        $("#secondcontain").css("display","block");  
        $("#thirdcontain").css("display","none");
        $("#forthcontain").css("display","none");
        i = 1;  
    });  
    $("#rqBtn").click(function(){  								//肉禽
        $(this).css({"border-bottom":"1px #2AC845 solid","font-size":"16px","color":"#2ac845"});  
        $("#vegetableBtn").css({"border-bottom":"1px #fff solid","font-size":"14px","color":"#000"});  
        $("#fruitBtn").css({"border-bottom":"1px #fff solid","font-size":"14px","color":"#000"});
        $("#cerealsBtn").css({"border-bottom":"1px #fff solid","font-size":"14px","color":"#000"});
        $("#firstcontain").css("display","none");  
        $("#secondcontain").css("display","none");  
        $("#thirdcontain").css("display","block");
        $("#forthcontain").css("display","none");
        i = 2;  
    });
    $("#cerealsBtn").click(function(){  								//五谷杂粮
        $(this).css({"border-bottom":"1px #2AC845 solid","font-size":"16px","color":"#2ac845"});  
        $("#vegetableBtn").css({"border-bottom":"1px #fff solid","font-size":"14px","color":"#000"});  
        $("#fruitBtn").css({"border-bottom":"1px #fff solid","font-size":"14px","color":"#000"});
		$("#rqBtn").css({"border-bottom":"1px #fff solid","font-size":"14px","color":"#000"});
        $("#firstcontain").css("display","none");  
        $("#secondcontain").css("display","none");  
        $("#thirdcontain").css("display","none");
        $("#forthcontain").css("display","block");
        i = 3;  
    });
    //通过滑动事件实现tab切换  
    contain.ontouchstart = function() {             //触摸滑动开始  
        touch = event.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch  
        r = touch.screenX;  
    }  
    contain.ontouchmove = function() {              //滑动过程中  
        touch = event.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
		    //Jquery
		    mTop = $('#fruitPage')[0].offsetTop;
		    sTop = $(window).scrollTop();
		    result = mTop - sTop;
        if (result <= -21) {
        	$("#shopListNav").css({"position":"fixed","top":"44px","width":"100%","z-index":"10000"});
        }else {
        	$("#shopListNav").css({"position":"relative","top":"0"});
        }
    }  
    contain.ontouchend = function() {               //滑动结束手指离开触摸屏  
        l = touch.screenX;  
        console.log(l);  
        if (r - l < -120) {       //向右滑动  
            i -= 1;  
              
            if (i <= 0) {  
                i = 0;  
            }  
            //内容的切换  
            $(this).find(".listContent")[i].style.display = 'block';  
            $(this).find(".listContent")[i+1].style.display = 'none';  
            //导航的切换  
            $(".tabs").find("p")[i].style.borderBottom = '1px #2AC845 solid';
            $(".tabs").find("p")[i].style.fontSize = '16px';
            $(".tabs").find("p")[i].style.color = '#2AC845';
            $(".tabs").find("p")[i+1].style.borderBottom = '1px #fff solid';
            $(".tabs").find("p")[i+1].style.fontSize = '14px';
            $(".tabs").find("p")[i+1].style.color = '#000';
            if (i == 0) {  
                $(".tabs").find("p")[i+3].style.borderBottom = '1px #fff solid';
                $(".tabs").find("p")[i+3].style.fontSize = '14px';
            	$(".tabs").find("p")[i+3].style.color = '#000';
            }  
        }  
        if (r - l > 120) {        //向左滑动  
            i += 1;  
            if (i >= 3) {  
                i = 3;  
            }  
            //内容的切换  
            $(this).find(".listContent")[i].style.display = 'block';  
            $(this).find(".listContent")[i-1].style.display = 'none';  
            //导航的切换  
            $(".tabs").find("p")[i].style.borderBottom = '1px #2AC845 solid';
            $(".tabs").find("p")[i].style.fontSize = '16px';
            $(".tabs").find("p")[i].style.color = '#2AC845';
            $(".tabs").find("p")[i-1].style.borderBottom = '1px #fff solid';
            $(".tabs").find("p")[i-1].style.fontSize = '14px';
            $(".tabs").find("p")[i-1].style.color = '#000';
            if (i == 3) {  
                $(".tabs").find("p")[i-3].style.borderBottom = '1px #fff solid';
                $(".tabs").find("p")[i-3].style.fontSize = '14px';
            	$(".tabs").find("p")[i-3].style.color = '#000';
            }  
        }  
    }
}