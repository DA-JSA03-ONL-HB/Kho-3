// class dognvat {
//     ten
//     chan
//     tiengkeu
// }

// let arr1 = [1,2,3,9]

// // let arr2 = [2,6,10]

// // arr1.map(item =>item*2)
// // arr2.map(item => item*2)

// // class dognvat {
// //     constructor(){}
// //     constructor(name){
// //         this.name= name
// //     }
// //     tiengkeu(){
// //         console.log("hmmm");
// //     }
// // }

// class xe {

//     //thuộc tính
//     constructor (banh, color, chongoi, dongco, tocdo){
//         this.banh = banh
//         this.color = color
//         this.chongoi = chongoi
//         this.dongco = dongco
//         this.tocdo = tocdo
//     }
// inthongtin(){

// //phương thức
//     console.log("đây là xe với các thông tin");
//     console.log(`có ${this.banh} bánh xe`);
//     console.log(`có màu ${this.color} `);
//     console.log(`có ${this.chongoi} ghế`);
//     console.log(`có ${this.dongco} mã lực`);
//     console.log(`đạt vận tốc ${this.tocdo} km/h`);
// }
// }
// let xemay = new xe(2,"đen",2,110,120)
// xemay.inthongtin()

class xeoto {

    //thuộc tính
    constructor (banh, color, chongoi, dongco, tocdo){
        this.banh = banh
        this.color = color
        this.chongoi = chongoi
        this.dongco = dongco
        this.tocdo = tocdo
    }
inthongtin(){

//phương thức
    console.log("đây là xe với các thông tin");
    console.log(`có ${this.banh} bánh xe`);
    console.log(`có màu ${this.color} `);
    console.log(`có ${this.chongoi} ghế`);
    console.log(`có ${this.dongco} mã lực`);
    console.log(`đạt vận tốc ${this.tocdo} km/h`);
}
}
let xeo = new xeoto(4,"đen",5,110,120)
xeo.inthongtin()

class xemotor extends xeo {
constructor(banh,color,chongoi,dongco,tocdo,giayphep){
    super(banh,color.chongoi,dongco,tocdo)//kế thừa các thuộc tính mà lớp cha có
    this.giayphep = giayphep//thuộc tính mà lớp cha ko cần mô tả lại
    this.loaixe = "xe motor gắn máy"

}
duoclaixe(){
    if(this.giayphep == "a2"){
        console.log("được lái xe");
    }else if (this.dongco <175){
        console.log("được lái xe")
    }else console.log("ko đc lái xe")
}


}

let winnerx = xemotor(2,"đen",2,150,150,"a1")
winnerx.inthongtin()
winnerx.duoclaixe()
let z1000 = new xemotor(2,"đen",2,1000,300,"a1")