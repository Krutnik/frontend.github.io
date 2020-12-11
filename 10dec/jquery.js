// let blok = document.querySelector('.blok');
let card = document.querySelector('.card');
let image = document.getElementsByTagName('img');
let head = document.getElementById('heading');
let description = document.getElementById('description');
let priceBuy = document.querySelector('.priceBuy');
let btnPrice = document.getElementById('price');
let btnbuy = document.getElementById('buy');

function createElem() {
    let blok = document.createElement('div');
    blok.classList.add('blok');

    document.body.appendChild(blok);
}