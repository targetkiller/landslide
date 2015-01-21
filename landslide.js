/*
* @arthur:tqtan;
* @date:20140121;
* @content:横屏切换组件;
*/

var Landslide = function(){
    this.ww = window.screen.width;    
    this.wh = window.screen.height;
}

Landslide.prototype = {
    logger: function(){
        console.log('screen width:'+this.ww);
        console.log('screen height:'+this.wh);
    },
    setPage: function(selector){
        var $container = $(selector);
        var $pages = $container.find('.page');
        $pages.css({
            width : this.ww,
            height : this.ww
        });
    },
    init: function(selector){
        // 输出信息
        this.logger();
        // 设定所有页面
        this.setPage(selector);

    }

}

var ls = new Landslide();
ls.init('.container');


