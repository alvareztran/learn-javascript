// Đồng bộ - Tuần tự

console.log(1);
console.log(2);
console.log(3);

// Bất đồng bộ

console.log(1);

setTimeout(() => {
    console.log(2);
}, 2*1000);
// Thực hiện hàm sau 2*1000ms

console.log(3);