let btnCreate = document.querySelector('.btn_create');
let btnRemove = document.querySelector('.btn_remove');
let newElements = document.querySelector('.new_elements');
let elem;
let numberElements = document.querySelector('.number_elements');


btnCreate.onclick = function() {
    for(let i = 0; i < +numberElements.value; i++) {

        elem = document.createElement('p');
        elem.textContent = "Новый абзац...";
        elem.classList.add('elem');

        if(i == 0) {
            elem.style.backgroundColor = "darkred";
            elem.style.color = "white";
        }

        newElements.append(elem);
    }
}

let children = newElements.childNodes;

btnRemove.onclick = function() {
    for(let i = children.length - 1; i > -1; i--) {
        newElements.removeChild(children[i]);
    }
}