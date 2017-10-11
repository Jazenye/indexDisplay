// 作用: 显示鼠标在盒子中的坐标。
// onmousemove:在事件源上移动便会触发
// 1. 获取鼠标在整个页面的位置
// 2. 获取盒子在整个页面的位置
// 3. 用鼠标的位置减去盒子的位置赋值给盒子的内容。

let box1 = document.querySelector(".box");
let contentX = document.querySelectorAll(".local span")[0];
let contentY = document.querySelectorAll(".local span")[1];

box1.onmousemove = function(event) { 
    event = event || window.event;
    // 获取鼠标在页面中的位置
    let pageX = event.pageX || scroll().left + event.clientX;
    let pageY = event.pageY || scroll().top + event.clientY; 

    // 获取图片左上角在页面中的位置
    let imgX = box1.offsetLeft;
    let imgY = box1.offsetTop;
    let x = pageX - imgX;
    let y = pageY - imgY;
    contentX.innerHTML = x;
    contentY.innerHTML = y;
}

box1.onmouseleave = function(){
    contentX.innerHTML = "";
    contentY.innerHTML = ""; 
}