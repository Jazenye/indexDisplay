//步骤：
// 1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
// 2.让页面加载出所有的盒子的样式。
// 3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
// 4.书写函数。
// (操作数组。正向旋转：删除数组中第一个样式，添加到数组中的最后一位)
// (操作数组。反向旋转：删除数组中最后一个样式，添加到数组中的第一位)
var arr = [{ //  1
        width: 200,
        top: 70,
        left: 25,
        opacity: 20,
        zIndex: 2
    },
    { // 2
        width: 300,
        top: 120,
        left: 0,
        opacity: 80,
        zIndex: 3
    },
    { // 3
        width: 400,
        top: 100,
        left: 100,
        opacity: 100,
        zIndex: 4
    },
    { // 4
        width: 300,
        top: 120,
        left: 300,
        opacity: 80,
        zIndex: 3
    },
    { //5
        width: 200,
        top: 70,
        left: 375,
        opacity: 20,
        zIndex: 2
    }
];

//0.获取元素
var slide = document.getElementById("slide");
var liArr = slide.getElementsByTagName("li");
var arrow = slide.children[1];
var arrowChildren = arrow.children;
//设置一个开闭原则变量，点击以后修改这个值。
var flag = true;

//1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
slide.onmouseenter = function () {
    animate(arrow, {
        "opacity": 100
    });
}
slide.onmouseleave = function () {
    animate(arrow, {
        "opacity": 0
    });
}

move();
//3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
arrowChildren[0].onclick = function () {
    if (flag) {
        flag = false;
        move(true);
    }
}
arrowChildren[1].onclick = function () {
    if (flag) {
        flag = false;
        move(false);
    }
}

//4.书写函数。
function move(bool) {
    //判断：如果等于undefined,那么就不执行这两个if语句
    if (bool === true || bool === false) {
        if (bool) {
            arr.unshift(arr.pop());
        } else {
            arr.push(arr.shift());
        }
    }
    //在次为页面上的所有li赋值属性，利用缓动框架
    for (var i = 0; i < liArr.length; i++) {
        animate(liArr[i], arr[i], function () {
            flag = true;
        });

        //利用animate()框架让指定的属性，缓慢运动到指定位置。
        /*
        animate(liArr[i],{
            "width":json[i].width,  //第一个li，必须对应第一个数组元素中的第一个的指定属性
            "top":json[i].top,
            "left":json[i].left,
            "opacity":json[i].opacity,
            "zIndex":json[i].z
        }, function () {
            //回调函数，所有程序执行完毕，在初始化flag的值为true
            flag = true;
        });
        }
        */
    }
}