/*定义接口
  
  1) url:
  2) 入参: { start: 2, len: 6 }
  3) 回参: 
  {
    status: 1, //1代表正常，0代表出错
    data: [2,3,4,5,6,7]
  }
  */

var ct = document.querySelector('#ct');
var btn = document.querySelector('#load-more');

var curIndex = 0; // 当前要加载的数据的序号
var len = 5; // 每次加载多少个数据
var isLoading = false; // 状态锁，用于判断是否在加载数据

btn.addEventListener('click', function (e) {
    e.preventDefault(); // 防止点击 a 链接跳转

    if (isLoading) {
        return; // 如果正在请求数据，那这次点击什么都不做
    }

    // 执行到这里说明 没有正在发出的请求，那后面就可以发请求
    ajax('/loadMore', {
        idx: curIndex,
        len: len
    }, function (data) {
        appendData(data)
        isLoading = false //数据到来之后 解
        curIndex = curIndex + len //修改序号，下次要数据就从新序号开始要
        console.log(curIndex)
    })
    isLoading = true //发请求之前做个标记加锁

})


function ajax(url, json, onSuccess, onError) {
    var xhr = new XMLHttpRequest()
    var arr = []
    for (key in json) {
        arr.push(key + '=' + json[key])
    }
    url += '?' + arr.join('&')
    xhr.open('get', url)
    xhr.send()

    xhr.onload = function () {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            onSuccess(JSON.parse(this.response))
        } else {
            onError && onError()
        }
    }
}


function appendData(data) {
    for (var i = 0; i < data.length; i++) {
        var child = document.createElement('li')
        child.innerText = data[i]
        ct.appendChild(child)
    }
}