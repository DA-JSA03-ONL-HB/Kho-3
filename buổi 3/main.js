// const url = 'https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '265e17224cmshdc788249ea24af8p1f07b8jsn377e42c3c812',
//         'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
//     }
// };
// async function getData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         var data = JSON.parse(result)
//         console.log(data);
//         console.log(data[0].country)
//         console.log(data[0].deaths)
//         // console.log(data[o].confirmed)
//         // console.log(typeof(result));
//     } catch (error) {
//         console.error(error);
//     }
// }

// getData()



// //một số phương thức với object: assign();
// var info = {
//     fullName: 'abc',
//     age: 18,
//     class: '12A'
// }
// var coppyInfo = Object.assign({},info)
// console.log(coppyInfo);

// var coppyInfo2 = Object.assign({}, info, {school: 'THPT Dĩ An'})



// let o1 = {a: 21, b:22, c:24 };
// let o2 = {b: 25, c:26};
// let o3 = {c: 27};
// let finalObj = Object.assign({},o1,o2,o3);
// console.log(finalObj);


//ví dụ insert array
// var mid = [3,4];
// var arr = [1,2, ...mid,5,6];

// console.log(arr);


//ví dụ math
// var arr = [2,4,8,6,0];
// var max = Math.max(...arr);
// console.log(max);

// var min = Math.min(...arr)
// console.log(min);


//string to array
// var str = "hello everyone";
// var chars = [...str];
// console.log(chars);


//arrow function
// function sayHi() {

//     console.log('hello');

// }
// sayHi()// gọi hàm

// sayHello = () => {
//     console.log('hello mình là khôi')

// }
// sayHello()


//vd tính diện tích của hình vuông dự theo độ dài của cạnh

const lengthArr = [1.4,3,6];

var dtichHV = lengthArr.map(canh = canh*canh)
console.log(dtichHV);
console.log(lengthArr);