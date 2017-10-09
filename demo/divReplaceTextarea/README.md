# 用 div 替代 textarea

<br />

## 为什么要这样实现
`textarea` 是一个表单元素，用于多行文字的输入。  

在web上，常见以你够用： 评论输入框、反馈意见等。

根据需要，我们为`textarea`设置宽高，但是它的一个缺点是不能自适应，所以考虑到更广泛的使用场景就想到使用`div`来替代它   

## 怎么实现
1. 首先需要一个可以编辑的属性。`contenteditable`，这是H5中的一个新属性，可以使得内容能够编辑，这是使得`div`能够输入非常重要的一步。
2. 高度自适应   

```
#box{   
    width: 400px;
    min-height: 100px;
    max-height: 300px;
    height: auto;
	border: 1px solid #f00;
    outline: none;
    overflow-y: auto;
}
```
`max-height`、`overflow-y`设置当内容超出最大高度后出现滚动条。

## 一点问题
`contenteditable`属性在复制粘贴时会自带html样式。这个对于评论框之类的是非常不利的。

正在改进

