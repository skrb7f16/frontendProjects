console.log('hello');
let count = 0;
heading = document.getElementById('heading');
content = document.getElementById('contents');
let text = "Welcome to Kirana.com"
let text2 = "The following are the contents in our store"
let i = 0;
let j = 0;
typewriter();
//function for typewriter effect
function typewriter() {
    if (i < text.length) {
        heading.innerHTML += text[i];
        i++;
        setTimeout(typewriter, 50)
    }
    else if (j < text2.length) {
        content.innerHTML += text2[j]
        j++;
        setTimeout(typewriter, 50)
    }
}


//function for showing the inner contents of the header products
function show(name) {
    let container = document.getElementById(`${name}_real`);
    if (container.getAttribute('style') == "display:none") {
        container.setAttribute('style', "display:block");
    }
    else if (container.getAttribute('style') == "display:block") {
        container.setAttribute('style', 'display:none');
    }
    else {
        container.setAttribute('style', 'display:block');
    }
}

function bill(value) {
    let price = value.split("Rs ")[1].split('/-')[0]
    let product = value.split("Rs ")[0]
    let items = sessionStorage.getItem('items');
    if (items == null) {
        itemObj = [];
    }
    else {
        itemObj = JSON.parse(items)
    }
    let myObj = {
        itemNames: product,
        itemPrice: parseInt(price)
    }
    itemObj.push(myObj);
    sessionStorage.setItem('items', JSON.stringify(itemObj))
}


function billShow() {
    let items = JSON.parse(sessionStorage.getItem('items'));
    let billTotal = document.getElementById('billTotal');
    let price = 0;
    for (let i = 0; i <= items.length; i++) {
        if (i == items.length) {
            billTotal.innerHTML += `<hr><li id="totalBill"> Total - Rs ${price} <br><a href="pay.html" class="btn">PAY AND ORDER</a><br><hr><a href="#" class="btn">ORDER FOR COD</a></li>`
        }
        else {
            billTotal.innerHTML += `<li>${items[i].itemNames} - Rs ${items[i].itemPrice}</li>`
            price += items[i].itemPrice;
        }
    }
}


