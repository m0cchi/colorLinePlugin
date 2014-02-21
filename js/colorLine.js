(function($) {
    /* variable */
    var topMax = 0;
    var width = 0;
    var left = 0;
    var top = 0;
    var red = 0;
    var green = 0;
    var blue = 0;
    var opacity = 1.0;
    var thicknessOver = 0;
    var thicknessBottom = 0
    var size = 25;/*px*/
    var thickness_max = 5;
    /* constant */
    var COLOR_MAX = 0xff;

    var OPTION_DEFAULT = {
        height:size,
        number:thickness_max,
        lines:5
    };
    $.fn.colorLine = function(option){
        option = $.extend(OPTION_DEFAULT,option);
        size = option.height;
        thickness_max = option.number;
        for(var i=0;i<option.lines;i++){
            initVars(this);
            showLine(this);
        }
        return this;
    }
    /* variable init */
    function initVars(content){
        topMax = content.height() - thickness_max*2;
        top = Math.floor(Math.random() * (topMax+1) + thickness_max);
        width = content.width();
        height = Math.floor(Math.random() * (size+1) + 5);
        red = Math.floor(Math.random() * (COLOR_MAX+1));
        green = Math.floor(Math.random() * (COLOR_MAX+1));
        blue = Math.floor(Math.random() * (COLOR_MAX+1));
        opacity = Math.random() + 0.1;
        thicknessOver = Math.floor(Math.random() * thickness_max + 1);
        thicknessBottom = Math.floor(Math.random() * thickness_max + 1);
        left = content.offset ? content.offset().left : 0;
    }

    function showLine(content){
        var block;
        block = $('<div/>');
        block.addClass('color-line-element');
        block.css('top',top+'px');
        block.css('left',left+(left==0?'px':''));
        block.css('width',width+'px');
        block.css('height',height+'px');
        block.css('background-color','#'+red.toString(16)+green.toString(16)+blue.toString(16));
        block.css('opacity',opacity);
        content.append(block);
    }
})(jQuery);