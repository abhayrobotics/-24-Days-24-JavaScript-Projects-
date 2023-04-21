let interest = document.getElementById("InterestRange").oninput =function(){
    var value = this.value;
    console.log(value);
    
   this.style.background = `linear-gradient(90deg, var(--slider-color) ${value}%, var(--text-color) ${value}%);`;

    document.getElementById("interest__value").innerText = value + " %";
    // console.log(value_element)
}
console.log("checkk")
let interest2 = document.getElementById("InterestRange2").oninput =function(){
    var value = this.value;
    console.log(value);
    
   this.style.background = `linear-gradient(90deg, var(--slider-color) ${value}%, var(--text-color) ${value}%);`;

    document.getElementById("interest__value2").innerText = value + " Yr";
    // console.log(value_element)
}
