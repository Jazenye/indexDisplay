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


/*
* 对工具函数进行进一步封装，使得其可以不考虑参数的顺序
* 但是在传递的时候就需要使用对象的方式
* 例：
* { method:"post", url:"ajax.php"}
*/
function ajax_top_tool(option){
    var ajax = new XMLHttpRequest();
    if(option.method == "get"){
        if(option.data)
            url += "?" + option.data;
        ajax.open(option.method, option.url);
        ajax.send();
    }else if(option.method == "post"){
        ajax.open(option.method, option.url);
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        if(option.data)
            ajax.send(option.data);
        else
            ajax.send();
    }else
        return;

    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            option.success(ajax.responseText);
        }
    };
}
