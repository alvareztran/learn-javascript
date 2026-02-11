const temp = fetch("http://localhost:8000/users");

temp.then((res) => res.json()).then((data) => console.log(data))

/* 
Gọi fetch để lấy dữ liệu đã là một bất đồng bộ, sau đó ta lại gọi json() để xử lí dữ liệu lấy được
tiếp tục là một bất đồng bộ -->> then 2 lần.
*/