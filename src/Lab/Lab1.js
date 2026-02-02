const fullName = "Tran Vu Bang";

let today = new Date();
let currentYear = today.getFullYear();
const myBirthYear = 2006;
let myAge = currentYear - myBirthYear;

let isStudent = true;

let mySelf =  {
    fullName,
    myAge,
    isStudent
};

console.log(`Tên: ${fullName}, Tuổi: ${myAge}, Sinh viên: ${isStudent}`);