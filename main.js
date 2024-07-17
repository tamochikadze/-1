
// // 1. 
// function checkEquality(a, b) {
//     if (a === b) {
//         return "ტოლია";
//     } else {
//         return "არ არის ტოლი";
//     }
// }
// console.log(checkEquality());


// 2.
// function checkEquality(a, b) {
//     if (a === b) {
//         return "ტოლია";
//     } else {
//         return "არ არის ტოლი";
//     }
// }
// console.log(checkEquality(3, 5));

function checkEquality (num1, num2){
    if (typeof num1 === 'string')  {
     return false
    }
    if (typeof num2 === 'string') {
        return false
    }

    return num1 + num2
}

console.log(checkEquality(50,50))
console.log(checkEquality("50",50))

