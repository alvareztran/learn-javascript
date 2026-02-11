fetch("http://localhost:8000/users").then(data => data.json()).then(users => {
    console.log("Fetch with Promise", users);
})

const fetchData = async () => {
    const response = await fetch("http://localhost:8000/users");
    const data = await response.json();
    console.log("Fetch with Async/Await", data);
}

fetchData();