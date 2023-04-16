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
         quantity: 0 , 
        selected: false,
        price: 195.5,
    },
    spaghetti: {
        name: "Spaghetti Meat & Sauce",
        url: "./asset/plate__spaghetti-meat-sauce.png",
         quantity: 0 , 
        selected: false,
        price: 250.00
    },
    chicken: {
        name: "Chicken Salad",
        url: "./asset/plate__chicken-salad.png",
         quantity: 0 , 
        selected: false,
        price: 215.00,
    },
    bacon: {
        name: "Bacon Eggs",
        url: "./asset/plate__bacon-eggs.png",
         quantity: 0 , 
        selected: false,
        price: 200.00
    },
    fish: {
        name: "Fish Sticks Fries",
        url: "./asset/plate__fish-sticks-fries.png",
         quantity: 0 , 
        selected: false,
        price: 420.00,
    },
    ravioli: {
        name: "Ravioli",
        url: "./asset/plate__ravioli.png",
         quantity: 0 , 
        selected: false,
        price: 315.00,
    },
}
// console.log(cart.french.price);
// global variable
// let subtotal = document.getElementById('subtotal').innerText;
// subtotal = 0;
// // console.log(subtotal)
// let gst = document.getElementById('gst');
// let total = document.getElementById('total');

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
        cart[item].quantity= cart[item].quantity +1;
        // console.log(cart[item].net_value())
         let indivisualBill = cart[item].quantity * cart[item].price;
         console.log(indivisualBill)
        // subtotal = subtotal + indivisualBill;
        // gst =  Math.round(subtotal*0.05,2);
        // total = subtotal +gst;
        // console.log(subtotal)
        // document.getElementById('subtotal').innerText = "₹ " + subtotal;
        // document.getElementById('gst').innerText = "₹ " + gst;
        // document.getElementById('total').innerText = "₹ " + total;

        // let final_bill =
            // changing the breakup tag
            breakup.innerHTML = breakup.innerHTML + `
    <div class="dish" id= "dish_${item}">
    <div class="img"><img src="${cart[item]?.url}" alt=""></div>
    
    <div class="item__name">
    <h3 class="text__small">${cart[item]?.name}</h3>
    <h3  class="text__small"> ₹ ${cart[item]?.price}</h3>
    <span>
    <i class="fa-solid fa-chevron-left cursor" id="decrease_${item}" onclick="Decrease('${item}')"> </i>
    <span class="counter" id="counter_${item}">  ${cart[item]?.quantity}  </span>
    <i class="fa-solid fa-chevron-right cursor" id="increase_${item}" onclick="Increase('${item}')"></i>
    <span class="text__big" id="bill_${item}"> ₹ ${cart[item]?.price}</span>
    </span>
    
    </div>
    
    </div>
    `

    }
    finalBill()

}
// increase counter
function Increase(product){
    // console.log(typeof product) 
    let id= `increase_${product}`;
    let element = document.getElementById(id);
    let counter = cart[product].quantity;
    counter++;
     document.getElementById(`counter_${product}`).innerText= counter;
     cart[product].quantity = counter;

     let total =  cart[product].quantity*cart[product].price;
     console.log(total)
     document.getElementById(`bill_${product}`).innerText ="₹ "+total;


    // console.log(total)
    finalBill()
  
}
function Decrease(product){
    // console.log(typeof product) 
    let id= `decrease_${product}`;
    let element = document.getElementById(id);
    let counter = cart[product].quantity;
    counter--;
    if(counter ==0){
        // console.log("remove")
        document.getElementById(`dish_${product}`).remove();
        
        // chaning button text
        let button = document.getElementById('button_' + `${product}`);
        button.innerHTML = `Add to cart`;
         button.style.backgroundColor = "var(--purple)";
         // button.classList.remove('button-color');
         cart[product].selected = false;
    }
    else{
        
        document.getElementById(`counter_${product}`).innerText= counter;
    }
    cart[product].quantity = counter;


    // let total =  cart[product].quantity*cart[product].price;
    //  console.log(total)
    //  document.getElementById(`bill_${product}`).innerText =total;
    finalBill()
    // console.log(counter)
        
}

// final bill
function finalBill(){

    let subtotal =0;
    for(const key in cart){
        subtotal= subtotal + cart[`${key}`].price * cart[`${key}`].quantity;
        
        // console.log(subtotal)
    }
    // console.log(`subtotal is ${subtotal}`)
    // let indivisualBill = cart[item].quantity * cart[item].price;
            // subtotal = subtotal + indivisualBill;
            gst =  Math.round(subtotal*0.05,2);
            total = subtotal +gst;
            // console.log(subtotal)
            document.getElementById('subtotal').innerText = "₹ " + subtotal;
            document.getElementById('gst').innerText = "₹ " + gst;
            document.getElementById('total').innerText = "₹ " + total;
}