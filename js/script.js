let btnCreate = document.querySelector('.btn_create');
let btnRemove = document.querySelector('.btn_remove');
let newElements = document.querySelector('new_elemnts');
let elem;
let numberElements = document.querySelector('.number_elements');

btnCreate.onclick = function() {
    for(let i = 0; i < +numberElements.value; i++) {}
        elem = document.createElement('p');
        elem.textContent = "Новый абзац...";
        elem.classList.add('elem');

        newElements.append(elem);
    }
}

btnRemove.onclick = function() {
    newElements.childNodes[0].remove;
}