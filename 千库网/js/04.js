// 点击热搜框
var hotSearch = document.querySelector("#search-input-04");
var hotList = document.querySelector(".hot-search-04");
hotSearch.onclick = function () {
    if (hotList.style.visibility === "hidden") {
        hotList.style.visibility = "visible";
    } else {
        hotList.style.visibility = "hidden";
    }
};

hotSearch.onblur = function () {
    hotList.style.visibility = "hidden";
};

$(".mid-classify-04").mouseover(function () {
    $(".classify-04>ul li").css("animation-play-state", "paused")
    $(this).css("animation-play-state", "paused").text("定");
}).mouseout(function () {
    $(".classify-04>ul li").css("animation-play-state", "running");
    $(this).css("animation-play-state", "running").text("分");
});
$(".classify-04>ul li").mouseover(function () {
    $(this).css({
        "backgroundColor": "rgba(255, 50, 50, 0.8)",
        "animation-play-state": "paused"
    });

}).mouseout(function () {
    $(this).css({
        "backgroundColor": "#6CC90C",
        "animation-play-state": "running"
    });

})
