const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open('GET', 'https://the-mexican-food-db.p.rapidapi.com/');
xhr.setRequestHeader('x-rapidapi-key', '265e17224cmshdc788249ea24af8p1f07b8jsn377e42c3c812');
xhr.setRequestHeader('x-rapidapi-host', 'the-mexican-food-db.p.rapidapi.com');

xhr.send(data);