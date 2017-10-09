function GoTop(){
    this.ct = $("body");
    this.target = this.createNode();
    this.target.css({
        
    });
}
GoTop.prototype = {
    bindEvent: function(){
        var $target = this.target;

        // 绑定返回顶部的事件 
        $target.on("click", function(){
            $(window).scrollTop(0);
        }).on("mouseenter", function(){
            $target.css({
                opacity: 0.7
            })
        }).on("mouseleave", function(){
            $target.css({
                opacity: 1
            })
        })

        // 按钮的滑动效果
        $(window).on("scroll", function(){
            if($(this).scrollTop() > 100 ){
                $target.slideDown();
            }else{
                $target.slideUp();
            }
        })
    },

    // 新增节点元素
    createNode: function(){
        var $node = $("<button class=btn>Click Me</button>");
        this.ct.append($node);
        $node.hide();
        return $node;
    }
}

// 创造一个实例
var getTop = new GoTop();
getTop.bindEvent();