const username_log = "admin";

const password_log = "adminrights123";

const btnElement = document.getElementById("submitBtn");

btnElement.addEventListener('click', () => {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username, password);
    if (username === username_log && password === password_log) {
        alert("Đăng nhập thành công !");
    } else {
        alert("Đăng nhập thất bại. Username hoặc mật khẩu không đúng.");
    }
})