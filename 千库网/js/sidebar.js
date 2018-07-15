//活动图标

var active = document.createElement("a")
active.setAttribute("class","abox")
document.body.appendChild(active)

var activeDel = document.createElement("a")
activeDel.innerHTML='x'
activeDel.setAttribute("class","aboxd")
active.appendChild(activeDel)
activeDel.onclick =function(){
	active.style.display="none"
}
//侧边栏
var div = document.createElement("div")
div.setAttribute("class","sidebarDiv")
document.body.appendChild(div)   

var ul = document.createElement("ul")
ul.setAttribute("class","sidebarUl")
div.appendChild(ul)
var text=["全站<br/>VIP","咨询<br/>客服","企业<br/>VIP","QQ<br/>联盟","关注<br/>微信","点我<br/>赚钱","意见<br/>反馈"]
var ccsText1 = "客服QQ及电话"
var ccsText2=['客服qq:84xxxxxxx' , '客服电话：182XXXXXXXX','周一至周五：9：00 - 17：00']
var ccsText3=['全站海量下载' , '企业商用授权','在线申请发票']
var ccsText4 = "QQ联盟"
var ccsText5=['千库用户交流群1' , '千库用户交流群2','资深美工交流群']
var ccsText6 = "千库网签约设计师"
var ccsText7 = "点我赚钱"
for(var i=0;i<text.length;i++)
{
	var li = document.createElement("li")
	li.setAttribute("id","sidebarUl-"+(i+1))
	ul.appendChild(li)
//	基本文本信息
	var a = document.createElement("a")
	li.setAttribute("class","sidebarLi")
	a.setAttribute("class", "sidebarA")
	a.setAttribute("herf", "#")
	a.innerHTML=text[i]
	li.appendChild(a)
//	弹出框
	addMoreItem(li,i)
}
var t = document.createElement("div")
t.setAttribute("class","gotoTop")
t.innerHTML="^"
t.onclick = function(){window.scrollTo(0,0); }
div.appendChild(t)
//咨询客服
function addMoreItem(e,index){
	if(index == 1)
	{
		var div2=document.createElement("div")
		div2.setAttribute("class","callCS")	
		e.appendChild(div2)
		
		var p=document.createElement("p")
		p.setAttribute("class","callCS-title box-title")	
		p.innerHTML=ccsText1
		div2.appendChild(p)
		
		var div3=document.createElement("div")
		div2.appendChild(div3)
		
		for(var i=0;i<ccsText2.length;i++){
			var p2=document.createElement("p")
			p2.setAttribute("class","callCS-text")	
			p2.innerHTML=ccsText2[i]
			div2.appendChild(p2)
		}
	}else if(index == 2)
	{
		var div3=document.createElement("div")
		div3.setAttribute("class","companyVIP")	
		e.appendChild(div3)
	
		var div4=document.createElement("div")
		div4.setAttribute("class","companyVIP-img")
		div3.appendChild(div4)
		
	}else if(index == 3)
	{
		var div=document.createElement("div")
		div.setAttribute("class","qqUnion")	
		e.appendChild(div)
			
		var p=document.createElement("p")
		p.setAttribute("class","qqUnion-title box-title")	
		p.innerHTML=ccsText4 
		div.appendChild(p)
		
		for(var i=0;i<ccsText5.length;i++)
		{
			var div2=document.createElement("div")
			div2.setAttribute("class","qqUnion-div")	
			div.appendChild(div2)
			
			var p2=document.createElement("a")
			p2.setAttribute("class","qqUnion-text")	
			p2.setAttribute("href","#")	
			p2.innerHTML=ccsText5[i]
			div2.appendChild(p2)
			
			var span=document.createElement("span")
			span.setAttribute("class","qqUnion-inf qqUnion-inf-"+(i==0?"full":"unfull"))	
			span.innerHTML=i==0?"满群":"加群"
			div2.appendChild(span)
		}
	}else if(index == 5)
	{
		var div=document.createElement("div")
		div.setAttribute("class","clickMeMoney")	
		e.appendChild(div)
		
		var p=document.createElement("p")
		p.setAttribute("class","clickMeMoney-p")	
		p.innerHTML=ccsText6
		div.appendChild(p)
		
		var img=document.createElement("div")
		img.setAttribute("class","clickMeMoney-div")	
		div.appendChild(img)
		
		
		div.appendChild(p)
		var btn=document.createElement("a")
		btn.setAttribute("class","clickMeMoney-btn")
		btn.innerHTML=ccsText7
		btn.onclick = function(){
			alert("money+1")
		}
		div.appendChild(btn)
	}
} 