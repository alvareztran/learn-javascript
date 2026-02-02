const myself = {
    name: "Tran Vu Bang",
    birthday: "17/06/2006",
    age: 20
}

console.log(myself);

/* Thêm thuộc tính */

myself.address = "228 3/2 Street";
myself["language"] = "vietnamese";

/* Xóa thuộc tính */

delete myself.language;


/* Duyệt qua đối tượng */

const std1 = {
    name: "john",
    score: 8.5
}

const std2 = {
    name: "peter",
    score: 8
}

const std3 = {
    name: "Ronal",
    score: 9
}

const students = [std1, std2, std3];
console.log('>>>Check sinh viên: ', students);

// forEach

students.forEach((item, index) => {
    console.log(item.name, index);
})

// for (let key in object)  {}: duyệt qua thuộc tính

const myself = {
    name: "Tran Vu Bang",
    birthday: "17/06/2006",
    age: 20
}

for (let key in myself) {
    console.log(key, myself[key]);
}

// for (let key in object)  {}: duyệt qua giá trị

const myself = {
    name: "Tran Vu Bang",
    birthday: "17/06/2006",
    age: 20
}

for (let value of Object.values(myself)) {
    console.log(value);
}

for (let value of Object.entries(myself)) {
    console.log(value);
}