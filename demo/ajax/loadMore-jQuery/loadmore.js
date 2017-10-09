var index = 2;

        $(".loadmore").on("click", function () {
            if ($(this).data('isLoading')) { //获取一个状态锁
                return;
            }
            $(this).data('isLoading', true) //设置一个状态锁，防止在加载的数据回来之前用户多次点击
                .html('<img src="loading.gif" />'); //链式调用，换行也没关系，对齐好看些

            $.get("/getNews", "len=5&index=" + index).done(function (data) {
                if (index >= 20) {
                    $(".loadmore").text("没有更多啦~");
                    return
                }
                $.each(data, function (idx) {
                    console.log(1);
                    $("<li>" + data[idx] + "</li>").appendTo($(".ct"))
                })
                index += 5;
                $(".loadmore").data('isLoading',false).html("加载更多");
            })
        })