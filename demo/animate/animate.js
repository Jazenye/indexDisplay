cssJson1 = {"left": 300, "top": 200, "width": 300, "height": 200};
cssJson2 = {"left": 30, "top": 20, "width": 100, "height": 100};

function animate(ele, css, callback){
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
        var isModified = true;

        for(var attr in css){
            // step 为移动的步长, 并且逐渐减小
            // leader 为元素当前位置
            var leader = parseInt(getStyle(ele, attr)) || 0;
            var step = (css[attr] - leader)/10;

            // 细化处理步长, 防止接近结果时抖动或者达不到目标
            step = (step>0) ? Math.ceil(step) : Math.floor(step);
            leader = leader + step; 
            ele.style[attr] = leader + "px";
            if(leader !== css[attr]){
                isModified = false;
            }
        }

        if(isModified){
            clearInterval(ele.timer);
            if(callback){
                callback();
            }
        }
    }, 1)
}


// 兼容方法获取元素样式
function getStyle(ele, attr){
    return window.getComputedStyle(ele, null)[attr] || ele.currentStyle[attr]
}