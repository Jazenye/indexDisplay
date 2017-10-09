let liArr = document.getElementsByClassName('star');
let result = document.getElementsByClassName("result")[0];
let resultArr = ["很差", "较差", "还行", "推荐", "力荐"]

for (let i = 0; i < liArr.length; i++) {
    // 给数组绑定下标， 方便触发事件时评分对应
    liArr[i].index = i;
    // liArr[i].onclick = function () {
    //     // 当点击了第 i 个星星, 改变点击位置之前的星星背景
    //     for (let j = 0; j < liArr.length; j++) {
    //         if (j <= this.index) {
    //             liArr[j].style.background = 'url(imgs/star.gif) no-repeat 0 -29px';
    //         } else {
    //             liArr[j].style.background = 'url(imgs/star.gif) no-repeat 0 0px';
    //         }
    //     } 
    //     result.innerHTML  = resultArr[this.index];
    // };

    liArr[i].onmouseenter = function () {
        // 当点击了第 i 个星星, 改变点击位置之前的星星背景
        for (let j = 0; j < liArr.length; j++) {
            if (j <= this.index) {
                liArr[j].style.background = 'url(imgs/star.gif) no-repeat 0 -29px';
            } else {
                liArr[j].style.background = 'url(imgs/star.gif) no-repeat 0 0px';
            }
        }  
        result.innerHTML  = resultArr[this.index];
    };
    liArr[i].onmouseleave = function(){
        for(let j = 0; j < liArr.length; j++){
            liArr[j].style.background = 'url(imgs/star.gif) no-repeat 0 0px';
        }
        result.innerHTML = "";
    }
}