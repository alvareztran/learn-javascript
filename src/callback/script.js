const sayGoodBye = () => {
    console.log("Good bye !");
}

const greeting = (allias, myFunction) => {
    console.log("Hello", allias);
    myFunction();
}

greeting("Alvarez", sayGoodBye);

/*
- Callback Hell: callback lồng nhau quá nhiều
-> Khó hiểu, khó mở rộng, khó bảo trì
*/