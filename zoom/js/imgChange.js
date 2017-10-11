// 作用： 鼠标滑过下面的图片列表, 切换不同的图片显示

// 注意small & big 中的图片源都需要做替换

// 获取事件
let liAry = document.querySelectorAll(".items li");
let smallBox = document.querySelector(".small");
let bigImage = document.querySelector(".big img");


// 为items绑定元素事件
liAry.forEach(function(ele){
    let img = ele.querySelector("img");
    ele.onmouseenter = function(){
        removeClass(liAry, "active")
        this.classList.add("active");

        let src = img.getAttribute("src"); 
        // 注意这里的url 取的路径
        smallBox.style.backgroundImage = "url( "+ src +")"; 

        // 正则更换路径名称
        let newSrc = src.replace(/mini/, 'large'); 
        bigImage.setAttribute("src", newSrc);
    } 
})

// 去除一个DOM节点数组中, 含有类名为className的类
function removeClass(ary, className){
    ary.forEach(function(ele){
        ele.classList.remove(className);
    })
} 