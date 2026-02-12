const todoName = document.getElementById("name");
const saveBtn = document.getElementById("save-btn");

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

if (saveBtn) {
    saveBtn.addEventListener('click', () => {
        if (todoName.value.trim() === '') {
            return;
        }

        const myTodoStr = localStorage.getItem("myTodo");

        const newTodo = {
            id: getRandomInt(1, 1000000000),
            name: todoName.value
        }

        if (myTodoStr) {
            const myTodo = JSON.parse(myTodoStr);
            myTodo.push(newTodo)
            localStorage.setItem("myTodo", JSON.stringify(myTodo));
        } else {
            localStorage.setItem("myTodo", JSON.stringify([newTodo]));
        }
        

        window.location.href = "todo-list.html";
})
}

const displayTodoList = () => {
    const tbody = document.querySelector("#todo-list tbody");
    const myTodoStr = localStorage.getItem("myTodo");

    if (myTodoStr) {
        const myTodo = JSON.parse(myTodoStr);
        myTodo.forEach((value) => {
            tbody.innerHTML += `
            <tr>
                <td>${value.id}</td>
                <td>${value.name}</td>
                <td><button data-id="${value.id}" class="delete-btn">Xóa</button></td>
            </tr>`;
        })
    }
}

displayTodoList();

const handleDeleteTodo = (id) => {
    const myTodoStr = localStorage.getItem("myTodo");

    if (myTodoStr) {
        const myTodo = JSON.parse(myTodoStr);
        const newTodo = myTodo.filter ((todo) => {
            return todo.id + "" !== id;
        })
        localStorage.setItem("myTodo", JSON.stringify(newTodo));
        window.location.reload();
    }
}

/*
Cái chỗ so sánh để lọc Todo này có hai cách :
- Cách 1: Ép cái id của Todo sang string: todo.id + "" !== id
- Cách 2: So sánh lỏng lẻo bằng cách dùng toán tử != -> Không phân biệt chuỗi toàn số và số

-> Nhưng mà dùng cách 1 cho chặt :))
*/

const deleteBtns = document.querySelectorAll(".delete-btn");

if (deleteBtns) {
    deleteBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute("data-id");
            handleDeleteTodo(id);
        })
    })
}

