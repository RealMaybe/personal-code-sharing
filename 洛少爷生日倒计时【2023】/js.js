/* 确认按钮 */
$("#judge").on("click", () => {
    if ($("#judge").prop("checked") == true) {
        setTimeout(() => {
            $("#agreement .affirm .button").addClass("on");
        }, 400)
    } else {
        $("#agreement .affirm .button").removeClass("on");
    }
});

$("#agreement .affirm .button").on("click", () => {
    if ($("#judge").prop("checked") == true) {
        alert("1");
    } else {
        alert("请先确认阅读且了解以上所有内容！");
    }
});

/* iframe */
$(".link_page").on("click", function() {
    if ($(this).hasClass("link_1")) {
        $("#frame iframe").attr("src", "./page/explain.html");
    }
    if ($(this).hasClass("link_2")) {
        $("#frame iframe").attr("src", "./page/agreement.html");
    }
    if ($(this).hasClass("link_3")) {
        $("#frame iframe").attr("src", "./page/log.html");
    }
    $("#frame").css("display", "block");
});

/* close */
$("#frame .close").on("click", () => {
    $("#frame").css("display", "none");
    $("#frame iframe").attr("src", "/");
});