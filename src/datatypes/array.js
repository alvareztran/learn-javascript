const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mix = [1, 'blue', { name: "An", age: 17}];

/* Duyệt mảng */


// 1. for: lặp truyền thống
for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i] + ' ');
}

// 2. forEach: lặp, truy xuất sẵn value
arr.forEach(function(value, index){
    console.log(arr[i]);
})

// 3. map: tạo ra một mảng mới và thao tác trên nó, không làm thay đổi mảng ban đầu
const arrX2 = arr.map((value, index) => {
    return value*2;
})


/* Lọc các phần tử mảng với filter */ 

const ages = [10, 20, 30, 40, 50, 60, 70];

const agesX2 = ages.map((item, index) => {
    return item*2;
})

console.log('Original: ', ages);
console.log('X2', agesX2);

const agesGreaterThan20 = ages.filter((value, index) => {
    return value > 20;
})


/* Thêm và xóa phần tử cho mảng */

const arrs = [1, 2, 3, 4, 5];

// Xóa phần tử cuối
arrs.pop();

// Thêm phần tử
arrs.push(6);

