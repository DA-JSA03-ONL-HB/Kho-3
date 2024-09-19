const url = 'https://the-mexican-food-db.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '265e17224cmshdc788249ea24af8p1f07b8jsn377e42c3c812',
		'x-rapidapi-host': 'the-mexican-food-db.p.rapidapi.com'
	}
};

async function getData() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		var data = JSON.parse(result)
		console.log(data[1].title);

		for (items of data) {
			let card = document. createElement("div")
			card.classList.add("card")
			let imgContainer = document.createElement("div")
			imgContainer.classList.add("img-Container")
			let image = document.createElement("img")
			// name.classList.add("img")
			image.setAttribute("src",items.image)

			imgContainer.appendChild(image)	
			card.appendChild(imgContainer)

			let container = document.createElement("div")
	        container.classList.add('container')

            let name = document.createElement("h5")
			name.classList.add("product-name")
			name.innerText = items.title

			container.appendChild(name)
			let btn = document.createElement("button")
			btn.innerHTML = "Xem thêm"

			container.appendChild(btn)
			card.appendChild(container)

			document.getElementById("products").appendChild(card)



		}

} catch (error) {
		console.error(error);
	}
}

getData()