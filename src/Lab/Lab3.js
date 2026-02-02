const products = [
    {
        name: "product 1",
        price: 100,
        inStock: true
    },
    {
        name: "product 2",
        price: 90,
        inStock: false
    },
    {
        name: "product 3",
        price: 110,
        inStock: true
    },
    {
        name: "product 4",
        price: 105,
        inStock: true
    },
    {
        name: "product 5",
        price: 140,
        inStock: false
    }
];

// 1.
console.log(products[0].name);

// 2.
const products_v2 = [
    products[0], 
    {
        name: products[1].name,
        price: 150,
        inStock: products[1].inStock
    },
    products[2],
    products[3],
    products[4]
]

console.log(products);

//3.
products.push({
    name: "product 6",
    price: 190,
    inStock: true
})

console.log(products);

// 4.
products.pop();
console.log(products);

//5.
products.forEach((item, index) => {
    console.log(item.name);
})

//6.
const prices = products.map((item, index) => {
    return item.price;
})

//7.
const inStockProducts = products.filter((value, index) => {
    return value.inStock === true;
})

//8.
for (let key in products[0]) {
    console.log(key);
}