let interest = document.getElementById("InterestRange").oninput = function () {
    var value = this.value;
    const slider = document.getElementsByClassName('slider');
    console.log( slider.style.background);
    slider.style.background = `linear-gradient(90deg, var(--slider-color) 80%, var(--text-color) 80%);`;

    document.getElementById("interest__value").innerText = value + " %";
    // console.log(value_element)
}
console.log("checkk")