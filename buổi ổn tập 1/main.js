let arr= [1,2,3,4,5,6,7,8,9]
let arr_odd = arr.filter(item => item% 2 !=0)
let arr_even = arr.filter(item => item% 2 == 0)

console.log('arr_odd đã bình phương',
    arr_odd.map(item =>item= item * item))

console.log('arr_even đã nhân đôi',
    arr_even.map(item => item = item * item)
)

let s = "hello wordl"
let arr_s = s.split("")
console.log(arr_s);