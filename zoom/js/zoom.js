// 放大器组件 当鼠标放到左边的图片上, 右边生成局部放大图片 
// 技术点：onmouseenter==onmouseover 第一个不冒泡
//技术点：onmouseleave==onmouseout  第一个不冒泡
//步骤：
// 1. 鼠标放上去显示盒子，移开隐藏盒子 
// 2. mouseover盒子跟随移动 
// 3. 右侧的大图片，等比例移动 

// 获取相关元素
let box = document.querySelector(".box");
let small = document.querySelector(".box .small");
let big = document.querySelector(".box .big");
let mask = document.querySelector(".mask");
let bigImg = document.querySelector(".big img");

//小盒子绑定事件: 鼠标放上去显示盒子，移开隐藏盒子 
small.onmouseenter = function () {   
    show(mask);
    show(big);
}
small.onmouseleave = function () {  
    hide(mask);
    hide(big);
}

// mask跟随移动. 事件源是small(只要在小盒子上移动, 盒子也要跟随)
small.onmousemove = function (event) {
    // 想移动mask, 必须知道鼠标在small中的位置. 
    // local.js 引入contentX & contentY 为鼠标在盒子中的位置 
    // 让鼠标在黄盒子最中间，减去黄盒子宽高的一半
    let maskX = contentX.innerHTML - mask.offsetWidth / 2;
    let maskY = contentY.innerHTML - mask.offsetHeight / 2; 

    //限制换盒子范围
    //left取值为大于0，小盒子的宽 - mask的宽。
    if (maskX < 0) {
        maskX = 0;
    }
    if (maskX > small.offsetWidth - mask.offsetWidth) {
        maskX = small.offsetWidth - mask.offsetWidth;
    }
    if (maskY < 0) {
        maskY = 0;
    }
    if (maskY > small.offsetHeight - mask.offsetHeight) {
        maskY = small.offsetHeight - mask.offsetHeight;
    }

    //移动mask 
    mask.style.left = maskX + "px";
    mask.style.top = maskY + "px";

    // 右侧的大图片, 等比例移动。  
    // 大图片走的距离 / mask走的距离 = 大图片/小图片
    let ratio = bigImg.offsetWidth / small.offsetWidth;

    let imgX = ratio * maskX;
    let imgY = ratio * maskY;

    bigImg.style.marginTop = -imgY + "px";
    bigImg.style.marginLeft = -imgX + "px";
    // console.log(small.offsetWidth, bigImg.offsetWidth)
}
