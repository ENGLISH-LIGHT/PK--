$(function(){
    $(".lightBox-plu").lightBox();
    
    $(".searchInput").focus(function(event) {
    /* Act on the event */
    // console.log(1)
    $(".recentSearch").removeClass('hide');
});
//点击获取文字在input中
$(".recentSearch div").click(function(event) {
    /* Act on the event */ 
    $(".searchInput").val($(".recentSearch div").eq($(this).index()).children('.first').text());
    $(".recentSearch").addClass('hide');
});

//点击其他地方消失
$(".searchBox").click(function(event) {
    console.log(event.target.id)
    if(event.target.id!="first"&&event.target.id!="searchInput"){
$(".recentSearch").addClass('hide');
    }
    // 
});

})


