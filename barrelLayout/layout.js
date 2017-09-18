/* Barrel 构造函数用来生成用于木桶布局的对象
 * 参数1 ct : 布局容器DOM节点 
 * 参数2 imgNum : 容纳图片数量 
 * 参数3 height : 每行图片的固定高度
 */

function Barrel(ct, imgNum, height) {
    this.ct = ct;
    this.width = parseInt(window.getComputedStyle(ct, null).getPropertyValue("width"));  // parseInt()方法使得 1000px -> 1000
    this.rowHeight = height;  // 每行图片的固定高度
    this.imgArr = [];
    this.loadImg(imgNum);
}
Barrel.prototype = {
    /* loadImg: 加载图片, imgNum: 总共图片数量 
     * render: 渲染图片,计算每行可以容纳多少个img
     * layout: 计算完毕后,对图片进行布局
     */

    loadImg: function (imgNum) {
        let imgUrls = this.getImgUrls(imgNum);

        for (let i = 0; i < imgNum; i++) {
            let _this = this;
            let img = new Image();
            img.src = imgUrls[i];

            img.onload = function () {
                // Image 对象拥有 width & height 属性
                let ratio = this.width / this.height;
                let imgInfo = {
                    target: this,
                    ratio: ratio,
                    height: _this.rowHeight,
                    width: ratio * _this.rowHeight,
                }

                _this.render(imgInfo);
            }
        }
    },

    render: function (imgInfo) {
        // 定义该行图片宽度之和 
        let wholeWidth = 0;
        this.imgArr.push(imgInfo);

        for (let i = 0; i < this.imgArr.length; i++) {
            wholeWidth += this.imgArr[i].width;
        }
        if (wholeWidth > this.width) {
            // 若该行图片占满，弹出最后一张图片，并调整之前图片的大小
            let lastImg = this.imgArr.pop();
            wholeWidth -= lastImg.width;

            // 交由layout()方法来调整之前图片大小，并完成布局。调整成面积相等
            let newHeight = this.rowHeight * this.width / wholeWidth;
            this.layout(newHeight);

            // 开始另一行图片的渲染,并将上一行多余的图片存入下一行
            this.imgArr = [];
            this.imgArr.push(lastImg);
        }
    },

    layout: function (newHeight) {
        // 创建行容器并且加上类 交由CSS渲染
        let imgRow = document.createElement("div");
        imgRow.classList.add("img-row");

        // 遍历尚未清空的数组,改变图片宽度以适应整行宽度
        this.imgArr.forEach(function (ele, idx) {
            let imgCt = document.createElement("div");
            imgCt.classList.add("img-box");

            let childImg = ele.target;
            childImg.style.height = newHeight + "px";
            imgCt.appendChild(childImg);
            imgRow.appendChild(imgCt);
        });
        this.ct.appendChild(imgRow);
    },

    getImgUrls: function (imgNum) {
        // 生成一个可以取颜色值的数组: [1-9,A-F]
        let colorArr = [];
        for (let i = 0; i < 16; i++) {
            if (i < 10) {
                colorArr.push(i);
            } else {
                // charCode(65) == "A"
                colorArr.push(String.fromCharCode(65 + (i - 10)));
            }
        }

        // 生成一个存放图片链接的数组,并返回该数组
        let imgUrls = [];
        for (let j = 0; j < imgNum; j++) {
            // 随机生成图片宽高
            let imgWidth = Math.floor(Math.random() * 150 + 50);
            let imgHeight = Math.floor(Math.random() * 30 + 50);

            // 生成随机的背景颜色与文本颜色
            let bgColor = textColor = "";
            for (let k = 0; k < 6; k++) {
                bgColor += colorArr[Math.floor(Math.random() * 16)];
                textColor += colorArr[Math.floor(Math.random() * 16)];
            }

            let urls = "http://via.placeholder.com/" + imgWidth + "x" + imgHeight + "/" + bgColor + "/" +
                textColor;
            imgUrls.push(urls);
        }

        return imgUrls;
    }
}

let contain = document.querySelector(".ct");
let barrelObj = new Barrel(contain, 100, 100);