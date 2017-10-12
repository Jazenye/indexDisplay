let close = document.querySelector(".close");
let imgAry = document.querySelectorAll(".img-ct"); 
let box = document.querySelector(".start");

close.onclick = function(){
    // imgAry 这是下面那张图片
    // 下面的图片高度变为零, 然后容器的宽度变为0
    animate(imgAry[1], {"height": 0}, function(){
            animate(box, {"width": 0});
    });   
}

// 对盒子的宽度操作是不奏效的, 因为盒子是自适应撑开的 没有指定宽度
// animate(imgAry[1], {"width": 0}); 