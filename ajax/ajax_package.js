/*
 * 参数1：URL 传递处理的PHP文件
 * 参数2: data 传递处理的数据
 * 参数3：method 数据传递的方法
 * 参数4：回调函数，处理异步问题
*/

function ajax_tool(url, data, method, success){
    var ajax = new XMLHttpRequest();
    if(method == "get"){
        if(data)
            url += "?" + data;
        ajax.open(method, url);
        ajax.send();
    }else if(method == "post"){
        ajax.open(method, url);
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        if(data)
            ajax.send(data);
        else
            ajax.send();
    }else
        return;

    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            success(ajax.responseText);
        }
    };
}
