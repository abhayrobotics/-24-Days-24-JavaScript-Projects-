let cart = {
    french: {
        name: "French Fries with Ketchup",
        url: "./asset/plate__french-fries.png",
        quantity: 0,
        selected: false,
        price: 110.,
    },
    salmon: {
        name: "Salmon and Vegetables",
        url: "./asset/plate__salmon-vegetables.png",
        quantity: 0,
        selected: false,
        price: 195.5,
    },
    spaghetti: {
        name: "Spaghetti Meat & Sauce",
        url: "./asset/plate__spaghetti-meat-sauce.png",
        quantity: 0,
        selected: false,
        price: 250.00
    },
    chicken: {
        name: "Chicken Salad",
        url: "./asset/plate__chicken-salad.png",
        quantity: 0,
        selected: false,
        price: 215.00,
    },
    bacon: {
        name: "Bacon Eggs",
        url: "./asset/plate__bacon-eggs.png",
        quantity: 0,
        selected: false,
        price: 200.00
    },
    fish: {
        name: "Fish Sticks Fries",
        url: "./asset/plate__fish-sticks-fries.png",
        quantity: 0,
        selected: false,
        price: 420.00,
    },
    ravioli: {
        name: "Ravioli",
        url: "./asset/plate__ravioli.png",
        quantity: 0,
        selected: false,
        price: 315.00,
    },
}
// console.log(cart.french.price);
// global variable
let subtotal = document.getElementById('subtotal').innerText;
subtotal = 0;
console.log(subtotal)
let gst = document.getElementById('gst');
let total = document.getElementById('total');

function AddCart(item) {

    let breakup = document.getElementById('breakup');

    // identifying the button
    let button = document.getElementById('button_' + `${item}`);
    // console.log(breakup.innerHTML);

    // if not selected before then select
    if (cart[item].selected == false) {

        // chaning button text
        button.innerHTML = `<i class="fa-solid fa-check"></i> In Cart`;
        button.style.backgroundColor = "#000";

        // changing selected status to true
        cart[item].selected = true;

        // calculating total bill
        cart[item].quantity++;
        let indivisualBill = cart[item].quantity * cart[item].price;
        subtotal = subtotal + indivisualBill;
        gst =  Math.round(subtotal*0.05,2);
        total = subtotal +gst;
        console.log(subtotal)
        document.getElementById('subtotal').innerText = "₹ " + subtotal;
        document.getElementById('gst').innerText = "₹ " + gst;
        document.getElementById('total').innerText = "₹ " + total;

        let final_bill =
            // changing the breakup tag
            breakup.innerHTML = breakup.innerHTML + `
    <div class="dish">
    <div class="img"><img src="${cart[item]?.url}" alt=""></div>
    
    <div class="item__name">
    <h3 class="text__small">${cart[item]?.name}</h3>
    <h3  class="text__small"> ₹ ${cart[item]?.price}</h3>
    <span>
    <i class="fa-solid fa-chevron-left cursor"> </i>
    <span class="counter">  ${cart[item]?.quantity}  </span>
    <i class="fa-solid fa-chevron-right cursor"></i>
    <span class="text__big"> ₹ ${indivisualBill}</span>
    </span>
    
    </div>
    
    </div>
    <hr>`

    }

}