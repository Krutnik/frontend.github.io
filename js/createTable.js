let tableName = document.getElementById('tableName').value;
let numberRows = document.getElementById('numberRows').value;
let numberColumns = document.getElementById('numberColumns').value;

let tableBorderWidth = document.getElementById('tableBorderWidth').value + 'px';
let tableBorderType = document.querySelector('.table-border-type').value;
let tableBorderColor = document.getElementById('tableBorderColor').value;

let tabledataPadding = document.getElementById('tableDataPadding').value;

let tableDataColor = document.getElementById('tableDataColor').value;
let tableFontSize = document.querySelector('.table-font-size').value;
let tableFontColor = document.getElementById('tableDataFontColor').value;

let tableDataWidth = document.getElementById('tableDataWidth').value;
let dataBorderType = document.querySelector('.data-border-type').value;
let dataBorderColor = document.getElementById('dataBorderColor').value;

let btnCreate = document.querySelector('.btn-create');
let btnRemove = document.querySelector('.btn-remove');

function createTable() {
    let table = document.createElement('table');
    table.classList.add('table');
    document.body.appendChild(table);
    
    let caption = createCaption(tableName);
    table.appendChild(caption);

    let tbody = createTbody()
    
    return table;
}

function createCaption(tableName) {
    let caption = document.createElement('caption');
    caption.classList.add('table-name');
    caption.textContent = tableName.value;

    return caption;
}

function createTbody() {
    
}

btnCreate.addEventListener('click', function () {
    let table = createTable()
}); 





































