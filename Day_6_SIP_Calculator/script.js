let x;
let principal = document.getElementById('principal').oninput = function () {
    x = Sip();
    createChart();
    createBarChart();

}
let interest = document.getElementById("InterestRange").oninput = function () {
    var value = this.value;
    // console.log(value);

    this.style.background = `linear-gradient(90deg, var(--slider-color) ${value}%, var(--text-color) ${value}%);`;

    document.getElementById("interest__value").innerText = value + " %";
    // console.log(value_element)
    x = Sip();
    createChart();
    createBarChart();
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
    createBarChart()


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



    document.getElementById("invested").innerText = "₹ " + principal * n;
    document.getElementById("earning").innerText = "₹ " + (result - principal * n);
    document.getElementById("total").innerText = "₹ " + result;
    return [principal, i, n, result];
}
createChart()
// piechart
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
createBarChart()
// bar grapgh
function createBarChart() {
    // destroy old canvas
    document.getElementById('lineChart').innerHTML = `    <canvas class="barChart" id="barChart"></canvas>`;

    x = Sip();
    console.log(x)
    const deposited = x[0] * x[2];
    const increment = x[3] - deposited;
    console.log(deposited, increment);

    const ctx = document.getElementById('barChart').getContext("2d");

    // line chart array
    // let result = principal * ((((1 + i) ** n) - 1) / i) * (1 + i);
    let label1 = []
    let invested = [];
    let total = [];
    for (let i = 0; i <= x[2]; i = i + 12) {
        label1.push(`Year ${i / 12}`)
        invested.push(x[0] * i);
        let eachYear = x[0] * ((((1 + x[1]) ** i) - 1) / x[1]) * (1 + x[1]);
        total.push(eachYear)

    }
    console.log(label1, invested, total)
    const labels = label1;
    let config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Amount Invested',
                    data: invested,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        // 'rgba(255, 159, 64, 1)',

                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',

                    ],
                    borderWidth: 1,
                },
                {
                    label: 'Total Value',
                    data: total,
                    backgroundColor: [

                        'rgba(255, 159, 64, 1)',
                    ],
                    borderColor: [

                        'rgb(255, 159, 64)',
                    ],
                    borderWidth: 1

                }]
        },
        options: {
            layout: {
                autopadding: true,
            },
            plugins: {
                responsive: true,
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


