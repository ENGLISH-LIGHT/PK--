;(function($){
    var lightBox=function(lightBox){
        var me=this;
        me.lightBox=lightBox;
        me.config={"col":4,"effect":"default"};


        if(me.getConfig()){
            $.extend(me.config,me.getConfig());
        }
        
        var widthPer=Math.floor((100-4*me.config.col)/me.config.col)+"%";
        console.log(widthPer)
        me.lightBox.find('.singleBox').css({
            "width": widthPer     
             });
        if(me.config.effect=="bigger"){
            me.lightBox.find('.wrapmask img').css({
            "width": 0,
            "height":0     
             });
        }

        // console.log(me.config.col);
        me.index=0;
        me.singleBox=me.lightBox.find(".singleBox");
        // console.log(me.singleBox)
        me.singleBox.click(function(event) {
            /* Act on the event */
            me.click($(this));
        });
        me.left=me.lightBox.find(".left");
        me.right=me.lightBox.find(".right");
        me.left.click(function(event) {
            /* Act on the event */
            me.leftClick();
        });
        me.right.click(function(event) {
            /* Act on the event */
            me.rightClick();
        });
        me.mask=me.lightBox.find(".mask");
        me.mask.click(function(event) {
            /* Act on the event */
            me.maskRemove(event);
        });
    }

    lightBox.prototype={
        getConfig:function(){
            var me=this;
            var config=me.lightBox.attr("data-config");
            if(config&&config!=""){
                // console.log(11);
                return $.parseJSON(config);
            }else{
                return null;
            }
        },
        click:function(current){
            $('body').css("overflow", "hidden");

            var me=this;
            if(me.config.effect=="bigger"){
                 me.lightBox.find('.wrapmask img').css({
                "width": 0,
                "height":0     
                 });
            }
           

            me.index=current.index()-1;
            // console.log(me.index)
            if(me.index==0){
                me.lightBox.find(".left").css({
                    "color": '#333'
                });
            }

            me.judge();
            var src=me.lightBox.find("img").eq(me.index).attr("src");
            me.lightBox.find(".mask").eq(0).fadeIn(500, function() {
            });

            me.lightBox.find(".wrapmask img").eq(0).attr({
                    "src": src
                });
            if(me.config.effect=="bigger"){
                me.lightBox.find('.wrapmask img').animate({
                "width": "100%",
                "height": "100%"},
                500, function() {
                /* stuff to do after animation is complete */
            });
            }
            

            

        },
        leftClick:function(){
            $('body').css("overflow", "hidden");

            var me=this;
                me.index--;
                me.judge();
            var src=me.lightBox.find("img").eq(me.index).attr("src");
                me.lightBox.find(".wrapmask img").eq(0).attr({
                        "src": src
                    });
            },
        rightClick:function(){
            $('body').css("overflow", "hidden");
            var me=this;
            me.index++;
            console.log(me.index);
            
            me.judge();
                 var src=me.lightBox.find(" img").eq(me.index).attr("src");
                me.lightBox.find(".wrapmask img").eq(0).attr({
                        "src": src
                    });
                },
        judge:function(){
            var me=this;
            if(me.index<=0){
            me.lightBox.find(".left").css({
                "color": '#333'
            });
            me.index=0;
        }else{
             me.lightBox.find(".left").css({
                "color": '#fff'
            });
        }
        console.log(me.lightBox.find(" img").length)
        if(me.index>=(me.lightBox.find(" img").length)-2){
                me.index=me.lightBox.find(" img").length-2;
                me.lightBox.find(".right").css({
                    "color": '#333'
                });
            }else{
                me.lightBox.find(".right").css({
                    "color": '#fff'
                });
            }
        },
        maskRemove:function(event){
            var me=this;
            
            if(event.currentTarget==event.target){
                 $('body').css("overflow", "auto");
                me.lightBox.find(".mask").fadeOut(500, function() {
                
            });
            }
        }
    }

    $.fn.extend({
        lightBox:function(){
            this.each(function(index, el) {
                new lightBox($(this));
            });
            //为了完成jquery的链式调用
            return this;
        }
    });
    
    window.lightBox=lightBox;
})(jQuery)