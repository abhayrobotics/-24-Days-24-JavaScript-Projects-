let x;
let principal = document.getElementById('principal').oninput = function () {
    x = Sip();
    createChart();

}
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
    document.getElementById('barChart').innerHTML = `  <canvas class="barChart" id="barChart"></canvas>`;

    x = Sip();
    console.log(x)
    const deposited = x[0] * x[2];
    const increment = x[3] - deposited;
    console.log(deposited, increment);

    const ctx = document.getElementById('barChart').getContext("2d");

    // for(let i= 1;i<=x[2],i=i=12){

    // }
    const labels = [1, 2, 3, 34, 4, 5, 6];
    let config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Amount Invested',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    // 'rgba(255, 159, 64, 1)',
                   
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    // 'rgb(255, 159, 64)',
                   
                ],
                borderWidth: 1
            },{
                label: 'Total Value',
                data: [4,34,43,43,31,78 , 55],
                backgroundColor: [
                
                    'rgba(255, 159, 64, 1)',
                    // 'rgba(255, 205, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                  
                ],
                borderColor: [
                   
                    'rgb(255, 159, 64)',
                    // 'rgb(255, 205, 86)',
                    // 'rgb(75, 192, 192)',
                    // 'rgb(54, 162, 235)',
                    // 'rgb(153, 102, 255)',
                    // 'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
    const mychart = new Chart(ctx, config);


    }


