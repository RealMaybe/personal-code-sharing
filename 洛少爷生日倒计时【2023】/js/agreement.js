// 内容渲染
function agreement() {
    let agreement = `
    <!-- 标题 -->
    <h1>洛少爷2023生日倒计时<br>页面相关说明及使用要求</h1>

    <!-- 协议内容 -->
    <div id="agreement_content">
        <p>在使用本页面前，请您先阅读以下相关说明及使用要求。</p>

        <h2>相关说明</h2>
        <p>
            1、如果您发现本页面存在bug，欢迎反馈至本人工作邮箱：<span>zlz_0910@163.com&nbsp;</span>，或反馈至<a href="https://support.qq.com/product/415649" target="_blank">RealMaybe个人留言板</a>。
        </p>
        <p>2、本页面将于2023年8月15日 0时 停止服务。2024年将上线洛少爷生日倒计时（2024），敬请期待。</p>
        <p class="over_time">距离本页面停止服务还有00天00时00分00秒</p>
        <p>3、本页面已公开源码内容，请自行访问、下载相关内容。</p>
        <p>
            <strong>4、项目开源地址:</strong><br>
            <span>&emsp;gitee:</span>
            <a href="https://gitee.com/RealMaybe0429/personal-code-sharing.git" target="_blank">RealMaybe个人代码分享</a><br>
        </p>

        <h2>使用要求</h2>
        <p>1、本页面为RealMaybe独立开发制作，已上传至本人个人网站页面。仅供日常使用，禁止本页面商用。</p>
        <p>2、使用移动端设备纵向访问本页面能获得最佳效果。</p>
        <p>3、在您确认阅读并同意本要求的相关内容之后，请点击下方确认勾选框。确认后，本内容将不再在当前浏览器页面显示。如更换设备或更换浏览器，需重新确认。</p>

        <h2>联系我</h2>
        <p style="text-indent: 0;">个人微博：<a href="https://weibo.com/u/5678690912" target="_blank">@也许吧真的RealMaybe</a></p>
        <p style="text-indent: 0;">b站主页：<a href="https://space.bilibili.com/175020735/" target="_blank">也许吧真的RealMaybe的个人空间</a></p>
        <p style="text-indent: 0;">合作邮箱：<span>zlz_0910@163.com</span></p>
        <p style="text-indent: 0;">留言板：<a href="https://support.qq.com/product/415649" target="_blank">RealMaybe个人留言板</a></p>
    </div>

    <!-- 确认按钮 -->
    <div class="affirm">
        <span>我已阅读且了解以上所有内容</span>
        <input type="checkbox" id="judge">
    </div>
    `;

    $("#agreement").html(agreement);
};

// over time
function overTime() {
    let overSpans = document.querySelector(".over_time");

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

    let stop = "距离本页面停止服务还有" + days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
    overSpans.innerText = stop;

    // console.log(seconds + minutes + hours + days);
    return seconds + minutes + hours + days;
};
overTime();

// 停止计时器
let overTime_timer = setInterval(overTime, 1000);
if (overTime() < 0) {
    $("#body").html("");
    // 停止协议计时器
    clearInterval(overTime_timer);
    // 停止生日倒计时计时器
    clearInterval(birthDay_time);
} else {
    overTime_timer = setInterval(overTime, 1000);
}

// localStorage保存数据
function local() {
    let local = localStorage.getItem("lsyBirthLocal");
    if (local == "true") {
        $("#agreement").html("");
        $("#agreement").css({
            "display": "none"
        });
        clearInterval(overTime_timer);
    } else {
        agreement();
    }
    return local;
};
local();

// 确认按钮
$("#judge").on("click", () => {
    if ($("#judge").prop("checked") == true) {
        setTimeout(() => {
            $("#agreement").css({
                "display": "none"
            });
            $("#agreement").html("");
            local();
        }, 1000);
    } else {
        return;
    }
    localStorage.setItem("lsyBirthLocal", "true");
});