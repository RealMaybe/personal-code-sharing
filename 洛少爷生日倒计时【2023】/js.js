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