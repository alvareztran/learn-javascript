// console.log(1);

// // async
// setTimeout(() => {
//     console.log(2);
// }, 5000);

// console.log(3);

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2 with promise");
            resolve("OK");
        }, 5000);
    })
}

// const test = myPromise();
// console.log(test);

// console.log("========================");

console.log(1);
myPromise().then((data) => {
    console.log(data);
    console.log(3);
})