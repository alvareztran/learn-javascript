/* Lắng nghe sự kiện với Add Event Listener */

/*

const element = document.getElementById("myBtn");

console.log(element);

const handleClickBtn = () => {
    console.log("You clicked a button.");
}

element.addEventListener('click', handleClickBtn);

*/

/*
Khi truyền tham số hàm, nếu ta truyền tên hàm và cả (), JS sẽ hiểu là ta muốn thực thi hàm đó ngay 
lập tức. Tuy nhiên, với trường hợp đang demo là lắng nghe sự kiện click, tức là ta muốn chỉ khi ta 
click vào Btn thì hàm lắng nghe mới được chạy, với ý nghĩa đó, ta chỉ truyền tên hàm.
*/

// console.log("Click vao di bro!")

/* --------------------------------------------------------------------------------------- */

/* Thay đổi nội dung của thẻ HTML */

/*

const changeBtn = document.getElementById("changeBtn");

const undoBtn = document.getElementById("undoBtn");

const textElement = document.getElementById("myText");

changeBtn.addEventListener('click', () => {
    textElement.innerText = "Nội dung đã được thay đổi."
})

undoBtn.addEventListener('click', () => {
    textElement.innerText = "Nội dung ban đầu."
})

*/

// Ngoài ra còn có innerHTML, chèn được cả thẻ HTML

/*
changeBtn.addEventListener('click', () => {
    textElement.innerText = "<strong>Chào bạn ! <b>Bạn khỏe không ?</b></strong>"
})
*/

/* --------------------------------------------------------------------------------------- */

/* Thay đổi CSS bằng JS */

const changeBtn = document.getElementById("changeBtn");

const undoBtn = document.getElementById("undoBtn");

const textElement = document.getElementById("myText");

changeBtn.addEventListener('click', () => {
    textElement.style.color = 'green';
    textElement.style.backgroundColor = 'blue';
    textElement.classList.add("style1", "style2");
    textElement.classList.remove("style1");
})