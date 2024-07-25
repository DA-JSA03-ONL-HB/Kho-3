// //object
// var student = {
//     fullName: 'Khoi Nguyen',
//     age: 16, 
//     language: ['English','Vietnamese']//(ngoặc vuông là khai báo mảng)
//   //(khai báo object là ngoặc nhọn)   
// }


// //in ra giá trị của age
// console.log(student.age)

// // in ra các giá trị của language
// console.log(student.language)
// //in các giá trị của mạng language
// for (let i=0; i<student.language.length;i++){
//     console.log(student.language[i]);
// }
// //2//

// let student = [
//     {
//     name : "NVA",
//     age : 16,
//     course: ["mindX 01", "mindX 02", "mindX03"]
// },
//     {
//         name : "NVB",
//         age :18,
//         course: ["mindX 01", "mindX 02", "mindX03"]
//     },
//     {
//         name : "NVC",
//         age :17,
//         course: ["mindX 01", "mindX 02", "mindX03"]
//     },
//     {
//         name : "NVD",
//         age :15,
//         course: ["mindX 01", "mindX 02", "mindX03"]
//     },
// ]

// //nếu ko có thì hiển thị ko tìm thấy
// var box1 = prompt('nhập độ tuổi cần tìm');
// for (let i=0; i<student.length; i++) {
//     if(box1== student[i].age) {
//         alert(student[i].name)
//     }
//     else {
//         alert('ko tìm thấy')
//     }
// }



// //
// var box2 = prompt('nhập lớp học')
// student.array.forEach(s => {
//     if(s.course.includes(a)){
//         alert(s.name)
//     }
//     else {
//         alert('Ko có khoá học này')
//     }
// })

// //cau 2
// let arr1 = [0,2,4,6,8]
// let arr2 = [1,3,5,7]



// //cau 2a

// for (let i=0; i<arr1.length; i++){
//     if (arr1[1]>3){
//         alert(arr1[1])
//     }
// }


// //cau 2b
// let a = arr1+ ','+arr2;
// console.log(a);

// //cau 2c

// let A = [...arr1, ...arr2.sort((a, b) => a - b)];
// console.log(A);


//Spread Operator
//local storage
var userName = prompt('nhập tên: ')
var password = prompt = prompt('Nhập mật khẩu:')

localStorage.setItem('tendangnhap', userName);
localStorage.setItem('matkhau',password);


//in ra màn hình tên đăng nhập và mật khẩu đc lưu trong local storage
localStorage.getItem('tendangnhap')
localStorage.getItem('matkhau')




//in ra màn hình tên đăng nhập và mật khẩu đc lưu trong local storage
let fff = document.getElementById('btn')
fff.addEventListener('click',button1)
function button1(){
    //lấy từ local ra
    let x = localStorage.getItem('tendangnhap');
    let c = localStorage.getItem('matkhau');

    //in ra màn hình
    document.getElementById('userName').innerHTML = x;
    document.getElementById('pass').innerHTML = c;
}







