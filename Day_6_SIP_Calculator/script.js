let interest = document.getElementById("InterestRange").oninput =function(){
    var value = this.value;
    // console.log(value);
    
   this.style.background = `linear-gradient(90deg, var(--slider-color) ${value}%, var(--text-color) ${value}%);`;

    document.getElementById("interest__value").innerText = value + " %";
    // console.log(value_element)
    Sip()
}
console.log("checkk")
let time = document.getElementById("time").oninput =function(){
    var value = this.value;
    // console.log(value);
    
   this.style.background = `linear-gradient(90deg, var(--slider-color) ${value}%, var(--text-color) ${value}%);`;

    document.getElementById("time__value").innerText = value + " Yr";
    // console.log(value_element)
    Sip()
}


function Sip(){
    const principal = document.getElementById('principal').value ;
    const i = document.getElementById('InterestRange').value /(12*100) ;
    const n = document.getElementById('time').value*12 ;
    
    console.log(principal,i,n)
    
    // M = P × ({[1 + i]^n – 1} / i) × (1 + i).
    let result = principal * ((((1+i)**n)-1)/i)*(1+i);
    console.log(result);
    document.getElementById("total").innerText = "₹ " + Math.round(result);
   
}