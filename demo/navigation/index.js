$(".parentWrap span").on("click", function(){
    // $(this).next().show() 让点击的下一个部分显示出来： 即content部分
    // 然后parent("li").siblings("li").find("div").hide()
    // 找到父元素li, 再选择它的所有兄弟节点的子元素为div的部分, 对这部分进行隐藏
    $(this).next().show().parent("li").siblings("li").find("div").hide();
})