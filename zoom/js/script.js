function show(ele) {
    ele.classList.add("show");
    ele.classList.remove("hide");
}

function hide(ele) {
    ele.classList.add("hide");
    ele.classList.remove("show");
}

// 缓动框架封装。 类似jQuery的animate
function animate(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target - ele.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        console.log(1);
        if (Math.abs(target - ele.offsetTop) < Math.abs(step)) {
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    }, 25);
}

// 开始封装自己的scrollTop
function scroll() {
    if (window.pageYOffset != null) { // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else if (document.compatMode === "CSS1Compat") { // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}