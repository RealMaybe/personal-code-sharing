/* over time */
function overTime() {
    let now_time = new Date().getTime();
    let target_time = new Date("2023-08-15 0:0:0").getTime();
    let difference = (target_time - now_time) / 1000;

    let day = parseInt(difference / 60 / 60 / 24);
    let hour = parseInt(difference / 60 / 60 % 24);
    let minute = parseInt(difference / 60 % 60);
    let second = parseInt(difference % 60);

    let seconds = numZero(parseInt(second % 60));
    let minutes = numZero(parseInt(minute % 60));
    let hours = numZero(parseInt(hour % 60));
    let days = numZero(parseInt(day));

    let stop = "距离页面停止服务还有" + days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
    $(".over_time").html(stop);

    return seconds + minutes + hours + days;
};
overTime();

/* 数字如果小于零则一直显示0 */
function numZero(num) {
    if (num > 0) {
        return num = num;
    } else if (num <= 0) {
        return num = 0;
    }
};

let overTime_timer = setInterval(overTime, 1000);

/* 停止计时器 */
if (overTime() < 0) {
    $("#body").html("");
    /* 停止协议计时器 */
    clearInterval(overTime_timer);
    /* 停止生日倒计时计时器 */
    clearInterval(birthDay_time);
} else {
    overTime_timer = setInterval(overTime, 1000);
}