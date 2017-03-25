var i=0;
var timer;
var color=['#e72b20','#008ff5','#66229d','#d302ff','#f65878'];
$(function(){

	$(".tp").eq(0).show().siblings().hide();
	$('#lunbo_bg').css({'background-color':color[0]});
	Timer();
	
	$(".xb").hover(function(){
		i=$(this).index();
		show();
		clearInterval(timer);
	},function(){
		Timer();
	});
	
	$(".btn_l").click(function(){
		clearInterval(timer);
		i--;
		if(i==-1){
			i=4;
		}
		show();
		Timer();
	});
	$(".btn_r").click(function(){
		clearInterval(timer);
		i++;
		if(i==5){
			i=0;
		}
		show();
		Timer();
	});
})
function show(){
	$(".tp").eq(i).fadeIn(400).siblings().fadeOut(400);
	$(".xb").eq(i).addClass("xb_bg").siblings().removeClass("xb_bg");
	$('#lunbo_bg').css({'background-color':color[i]});
}
function Timer(){
	timer=setInterval(function(){
		i++;
		if(i==5){
			i=0;
		}
		show();
	},2500);
}