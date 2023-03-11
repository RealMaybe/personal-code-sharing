// 轮播图
function animation() {
    let index = 0;

    function move() {
        index += 1;
        if ($(".banner_img li").length <= index) {
            index = 0
        };
        $(".banner_img li").eq(index).show(1000).siblings().hide(1000);
        $(".banner_dot li").eq(index).addClass("on").siblings().removeClass("on");
    };

    let time_con = 3000;
    let x = setInterval(move, time_con);
    $(".banner_dot li").on("click", function() {
        index = $(this).index();
        $(".banner_img li").eq(index).show(500).siblings().hide(500);
        $(this).addClass("on").siblings().removeClass("on");
    });

    /*
    $(".banner_img").hover(
        function() { clearInterval(x); },
        function() { x = setInterval(move, time_con); }
    );
    $(".banner_dot li").hover(
        function() { clearInterval(x); },
        function() { x = setInterval(move, time_con); }
    );
    */
};

// 浏览器窗口大小监听
win_size();
$(window).resize(win_size());

// 轮播图
animation();