let tableName = document.getElementById('tableName');
let numberRows = document.getElementById('numberRows');
let numberColumns = document.getElementById('numberColumns');
let moreSetting = document.getElementById('moreSetting');
let moreSettingHidden = document.querySelectorAll('.more-setting-hidden');

let tableBorderWidth = document.getElementById('tableBorderWidth');
let tableBorderType = document.querySelector('.table-border-type');
let tableBorderColor = document.getElementById('tableBorderColor');

let tableDataPadding = document.getElementById('tableDataPadding');

let tableDataColor = document.getElementById('tableDataColor');
let tableFontSize = document.querySelector('.table-font-size');
let tableFontColor = document.getElementById('tableFontColor');

let tableDataWidth = document.getElementById('tableDataWidth');
let dataBorderType = document.querySelector('.data-border-type');
let dataBorderColor = document.getElementById('dataBorderColor');

let btnCreate = document.querySelector('.btn-create');
let btnRemove = document.querySelector('.btn-remove');

let table;
let row, data;

function createTable() {
    table = createElem('table', 'table');
    document.body.appendChild(table);

    let caption = createElem('caption', 'table-name', tableName.value);
    table.appendChild(caption);

    if(!moreSetting.checked) {
        let thead = createElem('thead', 'table-header');
        table.appendChild(thead);
        createTheadContent(thead, 1, numberColumns);

        let tfoot = createElem('tfoot', 'table-footer');
        table.appendChild(tfoot);
        createTfootContent(tfoot, 1, numberColumns);
    }
    else {
        alert()
        table.style.border = tableBorderWidth.value + 'px ' + tableBorderType.value + tableBorderColor.value;
    }

    let tbody = createElem('tbody', 'table-body');
    table.appendChild(tbody);

    createTableContent(tbody, numberRows, numberColumns);

    return table;
}

function createElem(tag, className, text) {
    let elem = document.createElement(tag);
    elem.classList.add(className);
    elem.textContent = text;

    return elem;
}

function createTheadContent(thead, rows, cols) {
    for (let i = 0; i < rows; i++) {
        row = createElem('tr', 'table-row');
        thead.appendChild(row);

        for (let j = 0; j < cols.value; j++) {
            data = createElem('td', 'table-data', 'Lorem ipsum dolor sit amet.');
            row.appendChild(data);
        }
    }
    return thead;
}

function createTableContent(tbody, rows, cols) {

    for (let i = 0; i < rows; i++) {
        row = createElem('tr', 'table-row');
        tbody.appendChild(row);

        for (let j = 0; j < cols.value; j++) {
            data = createElem('td', 'table-data', 'Lorem ipsum dolor sit amet.');
            if(moreSetting.checked) {
                data.style.padding = tableDataPadding.value + 'px';
            }
            row.appendChild(data);
        }
    }
    return tbody;
}

function createTfootContent(tfoot, rows, cols) {
    for (let i = 0; i < rows; i++) {
        row = createElem('tr', 'table-row');
        tfoot.appendChild(row);

        for (let j = 0; j < cols.value; j++) {
            data = createElem('td', 'table-data', 'Lorem ipsum dolor sit amet.');
            row.appendChild(data);
        }
    }
    return tfoot;
}

btnCreate.addEventListener('click', function () {
    table = createTable();
});

btnRemove('click', function () {
    table = createTable();
});

moreSetting.addEventListener('change', function() {
    for (let i = 0; i < moreSettingHidde.length; i++) {
        moreSettingHidden[i].classList.toggle('more-setting__hidden');
    }
});

tableBorderWidth.addEventListener('input', function() {
    table.style.borderWidth = tableBorderWidth.value + 'px';
});

tableBorderType.addEventListener('input', function () {
    table.style.borderType = tableBorderType.value;
});

tableBorderColor.addEventListener('input', function () {
    table.style.borderColor = tableBorderColor.value;
});

tableDataPadding.addEventListener('input', function () {
    let tableData = document.getElementsByClassName('table-data');
    
    for(let td of tableData) {
        style.padding = tableDataPadding.value + 'px';
    }
});

