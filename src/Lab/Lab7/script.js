const renderBlogs = async () => {

    const getBlogs = await fetch("http://localhost:8000/blogs");
    const blogs = await getBlogs.json();

    const tbody = document.querySelector("#blogs tbody");
    if (blogs && blogs.length) {
        blogs.forEach((blog, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td><button data-id="${blog.id}" class="delete-btn">Delete</button></td>
            </tr>`
        })
    }
}

const addNewRow = (newBlog) => {
    const tbody = document.querySelector("#blogs tbody");
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${newBlog.id}</td>
        <td>${newBlog.title}</td>
        <td>${newBlog.author}</td>
        <td>${newBlog.content}</td>
        <td><button type="button" class="delete-btn" data-id="${newBlog.id}">Delete</button></td>
    `
    tbody.appendChild(newRow);
    const btn = document.querySelector(`[data-id="${newBlog.id}"]`)
    btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const data = await rawResponse.json();
        console.log(data);
        const row = btn.closest('tr');
        row.remove();
    })
}

const handleAddBlog = () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const content = document.getElementById('content');
    const saveBtn = document.getElementById('save-btn');

    saveBtn.addEventListener('click', async () => {
        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value
            })
        });
        const data = await rawResponse.json();
        addNewRow(data);
        console.log(data);
    });
}

const handleDeleteBlog = () => {
    const deleteBtns = document.querySelectorAll('.delete-btn');
    if (deleteBtns) {
        deleteBtns.forEach((btn) => {
            btn.addEventListener('click', async () => {
                const id = btn.getAttribute('data-id');
                const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                const data = await rawResponse.json();
                console.log(data);
                const row = btn.closest('tr');
                row.remove();
            })
        })
    }
}

renderBlogs().then(() => handleDeleteBlog());
handleAddBlog();