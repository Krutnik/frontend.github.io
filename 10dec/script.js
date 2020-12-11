class Card {
    #_src;
    #_alt;
    #_heading;
    #_description;
    #_price;
    #_parent;

    constructor(src, alt, heading, description, price, parent) {
        this.src = src;
        this.alt = alt;
        this.heading = heading;
        this.description = description;
        this.price = price;
        this.parent = document.querySelector(parent);
    }

    get src() {
        return this.#_src;
    }
    set src(srcValue) {
        this.#_src = srcValue;
    }

    get alt() {
        return this.#_alt;
    }
    set alt(altValue) {
        this.#_alt = altValue;
    }

    get heading() {
        return this.#_heading;
    }
    set heading(headingValue) {
        this.#_heading = headingValue;
    }

    get description() {
        return this.#_description;
    }
    set description(descriptionValue) {
        this.#_description = descriptionValue;
    } 

    get price() {
        return this.#_price;
    }
    set price(priceValue) {
        this.#_price = priceValue;
    } 

    get parent() {
        return this.#_parent;
    }
    set parent(parentValue) {
        this.#_parent = parentValue;
    }

    createCard() {
        let elem = document.createElement('div');
        elem.classList.add('card');
        elem.innerHTML = `
        
        <img class='card-image' src='${this.src}' alt='${this.alt}'>
        <h1 class='card-heading'>${this.heading}</h1>
        <p class='card-description'>${this.description}</p>
        <div class='card-price'>
            <span class="card-price-title>Цена:</span>
            <p class='card-price-value'>${this.price}$.</p>
        </div>
        `;

        this.parent.append(elem);
    }
}

let cards = [
    {
        src: 'img/bulbazavr.jpg',
        alt: 'bulbazavr',
        title: 'Bulbazavr',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, deserunt.',
        price: 99
    },
    {
        src: 'img/skvirtl.jpg',
        alt: 'skvirtl',
        title: 'Skvirtl',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, deserunt.',
        price: 99
    },
    {
        src: 'img/charmander.jpg',
        alt: 'charmander',
        title: 'Charmander',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, deserunt.',
        price: 99
    },
    {
        src: 'img/pikachu.jpg',
        alt: 'pikachu',
        title: 'Pikachu',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, deserunt.',
        price: 99
    }
]

let card1 = new Card(
    cards[0]['src'],
    cards[0]['alt'],
    cards[0]['title'],
    cards[0]['description'],
    cards[0]['price'],
    '.cards .blog').createCard();
let card2 = new Card(
    cards[1]['src'],
    cards[1]['alt'],
    cards[1]['title'],
    cards[1]['description'],
    cards[1]['price'],
    '.cards .blog').createCard();
let card3 = new Card(
    cards[2]['src'],
    cards[2]['alt'],
    cards[2]['title'],
    cards[2]['description'],
    cards[2]['price'],
    '.cards .blog').createCard();
let card4 = new Card(
    cards[3]['src'],
    cards[3]['alt'],
    cards[3]['title'],
    cards[3]['description'],
    cards[3]['price'],
    '.cards .blog').createCard();
let card5 = new Card(
    cards[2]['src'],
    cards[2]['alt'],
    cards[2]['title'],
    cards[2]['description'],
    cards[2]['price'],
    '.cards .blog').createCard();
let card6 = new Card(
    cards[0]['src'],
    cards[0]['alt'],
    cards[0]['title'],
    cards[0]['description'],
    cards[0]['price'],
    '.cards .blog').createCard();
let card7 = new Card(
    cards[3]['src'],
    cards[3]['alt'],
    cards[3]['title'],
    cards[3]['description'],
    cards[3]['price'],
    '.cards .blog').createCard();
let card8 = new Card(
    cards[2]['src'],
    cards[2]['alt'],
    cards[2]['title'],
    cards[2]['description'],
    cards[2]['price'],
    '.cards .blog').createCard();

class CardNew {
    #_src;
    #_alt;
    #_heading;
    #_parent;

    constructor(src, alt, heading, parent) {
        this.src = src;
        this.alt = alt;
        this.heading = heading;
        this.parent = document.querySelector(parent);
    }

    get src() {
        return this.#_src;
    }
    set src(srcValue) {
        this.#_src = srcValue;
    }

    get alt() {
        return this.#_alt;
    }
    set alt(altValue) {
        this.#_alt = altValue;
    }

    get heading() {
        return this.#_heading;
    }
    set heading(headingValue) {
        this.#_heading = headingValue;
    }

    get parent() {
        return this.#_parent;
    }
    set parent(parentValue) {
        this.#_parent = parentValue;
    }

    createCart() {
        let elemNew = document.createElement('div');
        elemNew.classList.add('cart');
        elemNew.innerHTML = `
        
        <img class='cart-image' src='${this.src}' alt='${this.alt}'>
        <h1 class='cart-heading'>${this.heading}</h1>
        `;

        this.parent.append(elemNew);
    }
}

let newCart = [
    {
        src: 'img/what-is-pokemon.jpg',
        alt: 'what-is-pokemon',
        title: 'What is pokemon',
    },
]

newCart = new CardNew(
    newCart[0]['src'],
    newCart[0]['alt'],
    newCart[0]['title'],
    '.cards .blog').createCart();