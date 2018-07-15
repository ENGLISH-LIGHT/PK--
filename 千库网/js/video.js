// 点击显示搜索建议，失去焦点后隐藏搜索建议
$("#input-search").click(function () {
    $(".search-sug").css("display", "block");
}).blur(function () {
    $(".search-sug").css("display", "none");
});

$(".li-search").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
});

// 鼠标移到封面上隐藏封面，显示video
$(".ul-video-box a img").mouseover(function () {
    $(this).css("display", "none");
    $(this).next().css("display", "block").get(0).play();
});

// 鼠标从video离开，隐藏video，显示封面
$(".ul-video-box a video").mouseleave(function () {
    $(this).css("display", "none");
    $(this).prev().css("display", "inline");
});

// 播放音乐
let playBtn = null;
let currentAudio = null;

$(".li-audio .auto-play").click(function () {
    if (playBtn !== null) {
        playBtn.css("background-position", "5px -64px");
    }
    if (currentAudio !== null) {
        currentAudio.pause();
    }
    playBtn = $(this);
    currentAudio = $(this).next()[0];
    const me = this;
    if (currentAudio.paused) {
        currentAudio.play();
        currentAudio.addEventListener("ended", function () {
            $(me).css("background-position", "5px -64px");
        });
        $(this).css("background-position", "-123px -62px");
    } else {
        currentAudio.pause();
        $(this).css("background-position", "5px -64px");
    }
});