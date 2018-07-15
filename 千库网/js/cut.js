var timer = 0;
var timersta = 0;
$(".cut-input").click(function(){
	var temp = new Date();
	timersta = temp.getTime();
	timer = setInterval(function(){
		var temp1 = new Date();
		var t = temp1.getTime();
		if(t - timersta >= 200){
			timersta = 0;
			clearInterval(timer);
		}
	}, 100);
	$(".cut-hot").fadeIn(0);
});
$("body").not(".cut-input").click(function(){
	if(timersta == 0){
		$(".cut-hot").delay(800).fadeOut(0);		
	}
});

$(".cut-classify").mousemove(function(){
	var mx = event.offsetX;
	var rate = mx / 1200 * 100;
	$(".cut-classify .cut-cool").attr("style", "background-image: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) " + (rate - 30) + "%, rgba(255, 255, 255, 1) " + (rate - 30) + "%, rgba(174, 208, 251, 1)" + rate + 
	"%, rgba(174, 208, 251, 1) " + rate + "%, rgba(255, 255, 255, 1) " + (rate + 30) + "%, rgba(255, 255, 255, 1) " + (rate + 30) + "%, rgba(255, 255, 255, 1) 100%);");
});
$(".cut-classify").mouseleave(function(){
	$(".cut-classify .cut-cool").attr("style", "background-image: ;");
});

$(".cut-good").mousemove(function(){
	var mx = event.offsetX;
	var rate = mx / 1200 * 100;
	$(".cut-good .cut-cool").attr("style", "background-image: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) " + (rate - 30) + "%, rgba(255, 255, 255, 1) " + (rate - 30) + "%, rgba(174, 208, 251, 1)" + rate + 
	"%, rgba(174, 208, 251, 1) " + rate + "%, rgba(255, 255, 255, 1) " + (rate + 30) + "%, rgba(255, 255, 255, 1) " + (rate + 30) + "%, rgba(255, 255, 255, 1) 100%);");
});
$(".cut-good").mouseleave(function(){
	$(".cut-good .cut-cool").attr("style", "background-image: ;");
});