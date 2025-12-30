let ctx = document.getElementById('myChart').getContext('2d');
let chartData = loadData();
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: chartData.labels,
        datasets: [{
            label: 'Values',
            data: chartData.values,
            backgroundColor: chartData.colors,
            borderColor: chartData.colors,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        animation: { duration: 800 },
        plugins: { tooltip: { enabled: true } },
        scales: { y: { beginAtZero: true } }
    }
});

function updateChart() {
    chartData = loadData();
    myChart.data.labels = chartData.labels;
    myChart.data.datasets[0].data = chartData.values;
    myChart.data.datasets[0].backgroundColor = chartData.colors;
    myChart.data.datasets[0].borderColor = chartData.colors;
    myChart.update();
}
