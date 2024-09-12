async function getData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        var data = JSON.parase(result)
        console.log(data);
        console.log(data.image);

        for (item of data){
            //khai báo biến card để tạo 1 thẻ chứa full
            let card = document.createElement("div")
            //đặt tên class cho thẻ vừa tạo
            card.classList.add("card")
            //khai báo biến imgcontainer để tạo một thẻ chứa hình 
            let imgContainer = document.createElement("div")
            //đặt tên class cho thẻ vừa tạo 
            imgContainer.classList.add("image-container")
            //khai báo biến image để tạo 1 thẻ img chứa hình
            let image = document.createElement("img")
            //chèn link ảnh vào thuộc tính src
            image.setAttribute("src", items.image)
            imgContainer.appendChild(image)
            card.appendChild(imgContainer)
            //khai báo biến container để tạo 1 thẻ chwuas thông tin sản phẩm 
            let container = document.createElement("div")
            //đặt tên classs cho thẻ vừa tạo
            container.classList.add("container")
            //khai báo biến name để tạo thẻ h5 chứa tên sản phẩm
            let name = document.createElement("h5")
            //đặt tên cho thẻ h5 vừa tạo
            name.classList.add("product-name")
            //lấy tên từ API để in ra
            name.innerText = items.title;
            //chèn tệp vào thẻ container
            container/appendChild(name);
            //thêm button
            let btn = document.createElement("button")
            btn.innerHTML = "Xem thêm"
            container.appendChild(btn)
            card.appendChild(container);
            document.getElementById("product").appendChild(card);
        }

    } catch(error) {
        console.error(error)
    }
    
    
}
