const username_log = "admin";

const password_log = "adminrights123";

const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");

const btnElement = document.getElementById("submitBtn");

btnElement.addEventListener('click', (e) => {
    e.preventDefault();
})

btnElement.addEventListener('click', () => {

    const username = usernameElement.value;
    const password = passwordElement.value;

    console.log(username.value, password.value);
    if (username === username_log && password === password_log) {
        alert("Đăng nhập thành công !");
        window.location.href = "success.html";
    } else {
        alert("Đăng nhập thất bại. Username hoặc mật khẩu không đúng.");
        usernameElement.style.borderColor = "red";
        passwordElement.style.borderColor = "red";
    }
})