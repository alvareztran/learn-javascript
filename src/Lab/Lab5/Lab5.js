const fetchUsers = async () =>  {
    const users = await fetch("http://localhost:8000/users");
    const res = await users.json();
    return res;
}

const tbody = document.querySelector("#users tbody");

const insertUsers = async () => {
    const users = await fetchUsers();
    if (users && users.length) {
        users.forEach((value, index) => {
            tbody.innerHTML 
            += `
            <tr>
                <td>${value.id}</td>
                <td>${value.name}</td>
                <td>${value.email}</td>
            </tr>`; 
        })
    }
}

insertUsers();