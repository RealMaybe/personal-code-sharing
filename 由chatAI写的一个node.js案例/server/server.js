const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8080;

const cors = require('cors');
app.use(cors());

app.use(express.static('public'));

// 使用body-parser中间件解析请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 存储注册用户信息的数组
const users = [];

// 处理注册请求
app.post('/saveData', (req, res) => {
    const { username, password } = req.body;
    if (users.find(user => user.username === username)) {
        // 如果用户名已存在，返回错误信息
        res.send('Username already exists!');
        return;
    }
    // 将用户信息添加到users数组中
    users.push({ username, password });
    res.send('Registration success!');
});

// 处理登录请求
app.post('/checkData', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        // 如果用户名和密码匹配，返回成功信息
        res.send({ status: "success", message: "Login success!" });
    } else {
        // 如果用户名或密码错误，返回错误信息
        res.send({ status: "failed", message: "Invalid username or password!" });
    }
});

// 启动服务
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});