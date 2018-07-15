var searchTxt = document.getElementsByClassName("searchTxt")
var searchBtn = document.getElementById("searchBtn")
var searchBox = document.getElementById("searchBox")
var searchDefColor='#989898';
var searchColor=["rgb(15,138,253)","rgb(41,206,220)","rgb(249,69,51)","rgb(254,159,77)"]
var searchDefTxt =[['1024','5'],['2048','25'],['4096','125'],['8129','625'],['16384','3125']]
function clickSearchItem(index)
{
	for(var i=0;i<searchTxt.length;i++)
	{
		searchTxt[i].style.color = searchDefColor
	}
	searchTxt[index].style.color = searchColor[index]
	searchBtn.style.backgroundColor=searchColor[index]
	searchBox.placeholder = '共'+searchDefTxt[index][0]+'张/昨日已更新'+searchDefTxt[index][1]+'张'
}

function clickHotItem(e)
{
	searchBox.value = e.children[0].innerHTML
}

/*轮播*/
var rollNum=6
var nowImgItemId=0;
var nowPlayId=0
function getSrcByIndex(index)
{
	return 'img/navigation/roll('+(index+1)+').png'
}
timer = setInterval(autoPlay,2000)
 $(".rollLi").eq(0).css("background","white")
 $(".rollLi").eq(0).animate({"width":"40px"},300) 
function autoPlay(){
 	var nextPlayId=nowPlayId+1
 	if(nextPlayId>=rollNum)nextPlayId=0

 	scrollPlay(nowPlayId,nextPlayId)
 	nowPlayId=nextPlayId
}
function scrollPlay(index,nextindex){
	$(".rollLi").eq(index).animate({"width":"20px","background":"none"},300) 
 	$(".rollLi").eq(nextindex).css("background","white")
 	$(".rollLi").eq(nextindex).animate({"width":"40px"},300)
 	
	$(".rollImg").eq(nowImgItemId)[0].src=getSrcByIndex(index)
	$(".rollImg").eq(1-nowImgItemId)[0].src=getSrcByIndex(nextindex)
	$(".rollImg").eq(nowImgItemId).fadeOut(500,function(){})
	$(".rollImg").eq(1-nowImgItemId).fadeIn(500,function(){})
	nowImgItemId=1-nowImgItemId
}

function mouseOverRollLi(index){
	clearInterval(timer)
	scrollPlay(nowPlayId,index)
	nowPlayId=index
}
function mouseOutRollLi(){
	autoPlay()
	timer = setInterval(autoPlay,2000)
}
/*canvas*/
	var can=document.getElementById("canvas")
	var ctx=can.getContext('2d')
	var scW=$(window).width();
	var scH=$(window).height(); 
	var hei = scH*0.999
	var curLen = 10
	var maxDep = 40//最大高度
	var sp=5//速度
	var bSize=4
	var dropSp=30
	var LNum=can.width/curLen//分段数
	var allL=[]//所有分段线
	var allB=[]
	var allW=[]
	var cutTime=60;
	var lastTime=new Date().getTime()
	ctx.strokestyle='blue'
	
	function wat(x,y){
		this.x=x;
		this.y=y;
		this.dsp=0
		this.update =function(){
			this.dsp+=1
			this.y+=dropSp
		}
	}
	function bo(dir,dep,x){
		this.dir=-dir
		this.dep=dep
		this.x=x
		this.update =function(){
			this.x+=Math.floor(sp*this.dir)
			for(var i=Math.floor(this.x-bSize);i<this.x+bSize;i++)
			{
				if(i<0 || i>=can.width)continue;
//				console.log('ttt'+i+','+allL.length+','+allL[i]+','+allL[i-2])
				allL[i]-=this.dep*Math.sin((i-this.x+bSize)/bSize/2*Math.PI)
//				console.log(i+','+this.x)
				if(i==this.x){
//					console.log('*****'+this.dep*Math.sin((i-this.x+bSize)/bSize/2*Math.PI))
//					console.log(allL[i]+','+allL[i-2])
				}
			}
			
		}
	}
	
	for(var i=0;i<LNum;i++)
	{
		allL.push(hei)
	}
	function clickWater(e){
	  var e = event || window.event;
	  var mouseX = e.screenX;   //鼠标点击的横坐标
	  var mouseY = e.screenY-60;  //鼠标点击的纵坐标
	  allW.push(new wat(mouseX,mouseY))
	}
	setInterval(autoBron,1000)
	function autoBron(){
		var num=0;
		var ran=Math.floor(Math.random()*10)
		if(ran==9)num=3
		else if(ran>=8)num=2
		else if(ran==7)num=1
		while(num--){
			allW.push(new wat(Math.floor(Math.random()*scW),Math.floor(Math.random()*50)))
		}
//		allB.push(new bo(-1,maxDep,80))
//		allW.push(new wat(80,20))
	}
	ctx.strokestyle='blue'
	setInterval(dra,20)
	function dra(){
		if(new Date().getTime() - lastTime >= cutTime){
			lastTime=new Date().getTime()
			can.height=can.height; 
			for(var i=0;i<LNum;i++)
			{
				allL[i]=hei
			}
			for(var i=0;i<allW.length;i++){
				allW[i].update();
			}
			for(var i=0;i<allW.length;i++){
				if(allW[i].y >= hei){		
					allB.push(new bo(1,maxDep/3,allW[i].x/curLen))
					allB.push(new bo(-1,maxDep/3,allW[i].x/curLen))
					delete allW[i]
					allW.splice(i,1)
					i--
				}
			}
			for(var i=0;i<allW.length;i++){
				ctx.moveTo(allW[i].x,allW[i].y-20);
				ctx.lineTo(allW[i].x,allW[i].y);
			}
//			console.log(allB.length);
			for(var i=0;i<allB.length;i++){
				allB[i].update();
			}
			for(var i=0;i<allB.length;i++){
				if(allB[i].x < -bSize || allB[i].x >= (can.width+bSize)/curLen){			
					delete allB[i]
					allB.splice(i,1)
					i--
				}
			}
//			console.log('/'+allB.length)
			ctx.moveTo(0,hei);
			for(var i=0;i<LNum;i++)
			{
				ctx.lineTo(i*curLen, allL[i]);
			}
			ctx.strokeStyle = "skyblue"
			ctx.lineWidth = 8
			ctx.stroke();
		}
		
//		 window.requestAnimationFrame(dra);
	}

