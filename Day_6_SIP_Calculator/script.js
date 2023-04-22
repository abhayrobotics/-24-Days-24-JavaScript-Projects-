let x;

let interest = document.getElementById("InterestRange").oninput = function () {
    var value = this.value;
    // console.log(value);

    this.style.background = `linear-gradient(90deg, var(--slider-color) ${value}%, var(--text-color) ${value}%);`;

    document.getElementById("interest__value").innerText = value + " %";
    // console.log(value_element)
    x = Sip();
    createChart();
}

console.log("checkk")
let time = document.getElementById("time").oninput = function () {
    var value = this.value;
    // console.log(value);

    this.style.background = `linear-gradient(90deg, var(--slider-color) ${value}%, var(--text-color) ${value}%);`;

    document.getElementById("time__value").innerText = value + " Yr";
    // console.log(value_element)
    x = Sip();

    createChart();

}


function Sip() {
    const principal = document.getElementById('principal').value;
    // monthly percent
    const i = document.getElementById('InterestRange').value / (12 * 100);
    // no of investment
    const n = document.getElementById('time').value * 12;

    // console.log(principal, i, n)

    // M = P × ({[1 + i]^n – 1} / i) × (1 + i).
    let result = principal * ((((1 + i) ** n) - 1) / i) * (1 + i);
    // console.log(result);
    result = Math.round(result);
    // let output;
    // if(result>999){
    //     output= result+ ",";
    // }
    document.getElementById("total").innerText = "₹ " + result;
    return [principal, i, n, result];
}
createChart()
function createChart() {
    // destroy old canvas
    document.getElementById('chart').innerHTML = ` <canvas id="piechart" class="piechart"> </canvas>`;

    x = Sip();
    console.log(x)
    const deposited = x[0] * x[2];
    const increment = x[3] - deposited;
    console.log(deposited, increment);

    const ctx = document.getElementById('piechart').getContext("2d");

    let config = {
        type: 'doughnut',
        data: {
            labels: ["Amount Invested", "Returns"],
            datasets: [{
                label: 'population',
                data: [
                    deposited,
                    increment,
                ],
                borderColor: '#fff',
                backgroundColor: [
                    '#ffcd56',
                    '#4caf50',
                ],
                hoverOffset: 5,
            }],

        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#fff'
                    }
                }
            },
            // responsive:true,
        }
    }



    const mychart = new Chart(ctx, config);


}
