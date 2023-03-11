// 浏览器窗口大小监听
function win_size() {
    let win_height = $(window).height();
    let img_height = ($(".banner_img img").height());
    let timer_height = ($(".timer").height());

    // main
    $("#main").css("height", win_height);

    // agreement
    $("#agreement").css("height", win_height);

    // banner
    $("#banner").css("height", win_height);
    $(".banner_img img").css({
        "width": "100%",
        "margin-top": -(img_height / 2),
    });

    // timer
    $(".timer").css({
        "top": (win_height - timer_height) / 2 + "px"
    })
};