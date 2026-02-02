const average = (math, english, literature) => {
    return (math + english + literature) / 3;
}

const ranking = (average) => {
    if (average >= 9) {
        console.log('Excellent');
    } else if (average >= 8) {
        console.log('Very good');
    } else if (average >= 6.5) {
        console.log('Good')
    } else {
        console.log('Average');
    }
}

const math = 9;
const english = 8.7;
const literature = 9.5;

const avg = average(math, english, literature);

console.log((`Điểm trung bình: ${avg}. Xếp loại: ${ranking(avg)}`));