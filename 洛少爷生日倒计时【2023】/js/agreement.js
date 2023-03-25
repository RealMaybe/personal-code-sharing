/* 内容渲染 */
function agreement() {
    let agreement = `
    <section class="main">
        <!-- 内容区域 -->
        <div class="content">
            <h1>洛少爷2023生日倒计时<br>页面使用须知</h1>
            <p>为防止出现错误使用，在使用本页面前，您需要先阅读以下相关说明及使用要求。</p>
            <p class="bor"></p>

            <p>本页面中包含计时器功能，须获取您当前所用设备的设备时间和网络时间。为保证页面展示效果达到最佳，请确保您的设备时间与网络时间一致。</p>
            <p>在使用本页面前，请阅读
                <a href="javascript: void(0);" class="link_page link_1">《洛少爷2023生日倒计时页面相关说明》</a>。
            </p>
            <p>在使用本页面时，须遵守
                <a href="javascript: void(0);" class="link_page link_2">《洛少爷2023生日倒计时页面使用要求》</a>。
            </p>
            <p>本页面会根据需要不定期更新，相关更新内容请阅读
                <a href="javascript: void(0);" class="link_page link_3">《洛少爷2023生日倒计时页面更新日志》</a>。
            </p>
            <p style="text-align: right;">Author of this page: RealMaybe</p>
            <p class="bor"></p>
            <p class="em0 fs">本页面将于 2023年8月14日 24时 停止服务</p>
            <p class="over_time em0 fs">距离本页面停止服务还有00天00时00分00秒</p>
        </div>

        <!-- 确认按钮 -->
        <div class="affirm">
            <div>
                <span>我已阅读且了解以上所有内容</span>
                <input type="checkbox" id="judge">
            </div>
            <div class="button">关闭当前窗口</div>
        </div>

        <!-- 内容 -->
        <div id="frame">
            <!-- 关闭 -->
            <a href="javascript: void(0);" class="close"></a>
            <!-- 内嵌网页 -->
            <iframe src="" frameborder="0"></iframe>
        </div>
    </section>`;

    $("#agreement").html(agreement);
};

/* local */
function local() {
    let local = localStorage.getItem("lsyBirthLocal");
    if (local == "true") {
        $("#agreement").css("display", "none");
        $("#agreement").html("");
        $(".a_con").css("display", "block");
    } else {
        agreement();
    }
    return local;
};
local();

/* 确认 */
$("#judge").on("click", () => {
    if ($("#judge").prop("checked") == true) {
        setTimeout(() => {
            $("#agreement .affirm .button").addClass("on");
        }, 400)
    } else {
        $("#agreement .affirm .button").removeClass("on");
    }
});

/* 关闭按钮 */
$("#agreement .affirm .button").on("click", function() {
    if ($("#judge").prop("checked") == true && $(this).hasClass("on")) {
        setTimeout(() => {
            $("#agreement").css("display", "none");
            $("#agreement").html("");
            /* 保存数据 */
            localStorage.setItem("lsyBirthLocal", "true");
            local();
            $(".a_con").css("display", "block");
        })
    } else {
        alert("请您先确认阅读且了解以上所有内容！");
    }
});

/* iframe */
$(".link_page").on("click", function() {
    if ($(this).hasClass("link_1")) {
        $("#frame iframe").attr("src", "./page/explain.html");
    }
    if ($(this).hasClass("link_2")) {
        $("#frame iframe").attr("src", "./page/require.html");
    }
    if ($(this).hasClass("link_3")) {
        $("#frame iframe").attr("src", "./page/log.html");
    }
    $("#frame").css("display", "block");
});

/* close */
$("#frame .close").on("click", () => {
    $("#frame").css("display", "none");
    $("#frame iframe").attr("src", "");
});

/* a_con */
// $(".a_con .text").on("click", () => {
//     $(".a_con").css("display", "none");
//     localStorage.removeItem("lsyBirthLocal");
//     agreement();
//     $("#agreement").css("display", "block");
//     win_size();
// });

// $(".a_con .close").on("click", () => {
//     $(".a_con").css("display", "none");
// });

/* 兼容 */
win_size();
$(window).resize(win_size());