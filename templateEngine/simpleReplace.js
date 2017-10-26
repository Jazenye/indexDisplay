function stringFormat(str){
    // 除去第一个参数，并且转换成
    let params = [].slice.call(arguments, 1);
    
    // 分组重复数字 {0}, {1}, ...{99}
    let regexp = /\{(\d+)\}/g;

    // 替换值是一个每次匹配都要调用的函数 
    str = str.replace(regexp, function(){
        /* 类数组对象，
        * 参数0： 匹配到的内容， 例： {0}
        * 参数1： 匹配到的分组里的内容 0, 1, 2,....
        * 参数1 ~ n-2 : 正则中匹配到剩余分组里匹配到的内容 
        * 参数n-1： 匹配到的内容所在索引 indexOf
        * 参数n： 原字符串
        */ 
        // console.log(arguments);
        let index = arguments[1];
        return params[index];
    })
    return str;
}


let html = 'Hello , {0}, {1}';
let name = 'Jazen'; 

console.log(stringFormat(html, name, 'str2'));  // Hello , Jazen, str2

