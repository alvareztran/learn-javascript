const btnElement = document.getElementById("submitBtn");

const inputBtn = document.getElementById("name");

const message = document.getElementById("message")

const previousName = document.getElementById("previousname");

const getPreviousName = localStorage.getItem("myName");

if (getPreviousName) {
    previousName.innerHTML = `<b>${getPreviousName}</b>`
}

btnElement.addEventListener('click', () => {
    localStorage.setItem("myName", inputBtn.value);
    console.log(inputBtn.value);
    alert("Submitted");
    message.innerHTML = `<b>${inputBtn.value}</b>`;
})

/*
Khi yêu cầu phải dùng tới lưu trữ đối tượng, ta cần tìm hiểu về JSON.stringify() và JSON.parse()
*/