/**
 * 适配器模式：
 * 它的作用像一个转接口，把原本格式不对称的数据转换成需要的内容。
 */

// 使用$id来适配jQuery的语法
$id = function( id ){
    return jQuery('#' + id)[0];
}