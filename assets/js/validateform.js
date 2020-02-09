// JavaScript source code
const PRODUCTS_KEY = "products";

function getProductsFromLocalStorage() {
    let products = [];

    if (localStorage.getItem(PRODUCTS_KEY)) {
        products = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
    }

    return products;
}

function addItemFormSubmit() {
    let products = getProductsFromLocalStorage();

    let buyersNameTextBox = document.querySelector("#bname");
    let buyersNameTextBox1 = document.querySelector("#bname1");
    let buna = buyersNameTextBox.value + " " + buyersNameTextBox1.value;
    let saddressTextBox = document.querySelector("#saddress");
    let cityTextBox = document.querySelector("#city");
    let amtTextBox = document.querySelector("#amt");
    let am = document.querySelector("#amt1");
    let famt = (amtTextBox.value + "." + am.value);
    let phnTextBox = document.querySelector("#p1");
    let p1 = document.querySelector("#p2");
    let p2 = document.querySelector("#p3");
    let p3 = document.querySelector("#p4");
    let p4 = document.querySelector("#p5");
    let p5 = document.querySelector("#p6");
    let p6 = document.querySelector("#p7");
    let p7 = document.querySelector("#p8");
    let p8 = document.querySelector("#p9");
    let p9 = document.querySelector("#p10");
    let p10 = document.querySelector("#p11");
    let phone = (phnTextBox.value + p1.value + p2.value + p3.value + p4.value + p5.value + p6.value + p7.value + p8.value
        + p9.value + p10.value);

    let product = {
        buyersname: buna,
        saddress: saddressTextBox.value,
        city: cityTextBox.value,
        amt: famt,
        phn: (phone)
    };

    products.push(product);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

function loadItems() {
    let products = getProductsFromLocalStorage();

    let tableBody = document.querySelector("#itemData");

    /*    products.forEach(product => {
            let prdRow = createProductRow(product);
            tableBody.append(prdRow);
        }); */

    for (let product of products) {
        let prdRow = createProductRow(product);
        tableBody.append(prdRow);
    }
}

function createProductRow(product) {

    let buyersnameCol = document.createElement("td");
    buyersnameCol.textContent = product.buyersname;

    let saddressCol = document.createElement("td");
    saddressCol.textContent = product.saddress;

    let cityCol = document.createElement("td");
    cityCol.textContent = product.city;

    let amtCol = document.createElement("td");
    amtCol.textContent = product.amt;

    let phnCol = document.createElement("td");
    phnCol.textContent = product.phn;

    let prdRow = document.createElement("tr");
    prdRow.append(buyersnameCol);
    prdRow.append(saddressCol);
    prdRow.append(cityCol);
    prdRow.append(amtCol);
    prdRow.append(phnCol);
    return prdRow;
}

