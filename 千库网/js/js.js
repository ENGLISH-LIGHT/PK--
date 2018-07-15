// 点击热搜框
var hotSearch = document.querySelector("#png2top");
var hotList = document.querySelector(".hot-search-04");
var worldCup =document.querySelector(".box>p");
hotSearch.onclick = function () {
    if (hotList.style.visibility === "hidden") {
        worldCup.style.visibility = "hidden";
        hotList.style.visibility = "visible";
    } else {
        hotList.style.visibility = "hidden";
        worldCup.style.visibility = "visible";
    }
};

//hotSearch.onblur = function () {
//  hotList.style.visibility = "hidden";
//};

var btn = document.getElementById("butn")
var count = 0;
var clock = null;
btn.onclick = function(){
//	弹框
	alert("暂不支持下载");
	if(count == 0){
	clock = setInterval(timer,1000);
	count = 1;
	}
}
