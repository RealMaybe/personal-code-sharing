$(document).ready(function() {
    // 注册
    $('#signup-btn').click(function() {
        var username = $('#signup-username').val();
        var password = $('#signup-password').val();
        var data = {
            username: username,
            password: password
        };
        $.post('http://localhost:8080/saveData', data, function(response) {
            // 注册成功提示
            alert(response);
        });
    });

    // 登录
    $('#login-btn').click(function() {
        var username = $('#login-username').val();
        var password = $('#login-password').val();
        var data = {
            username: username,
            password: password
        };
        $.post('http://localhost:8080/checkData', data, function(response) {
            if (response.status === "success") {
                // 登录成功提示
                alert(response.message);
            } else {
                // 登录失败提示
                alert(response.message);
            }
        });
    });
});