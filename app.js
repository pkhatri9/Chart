const addBtn = document.getElementById('addBtn');
const resetBtn = document.getElementById('resetBtn');
const themeToggle = document.getElementById('themeToggle');
const chartTypeButtons = document.querySelectorAll('.chart-type button');

addBtn.addEventListener('click', () => {
    const label = document.getElementById('label').value.trim();
    const value = parseFloat(document.getElementById('value').value);
    const color = document.getElementById('color').value;

    if (!label || isNaN(value)) return alert("Enter valid label and value");

    let data = loadData();
    data.labels.push(label);
    data.values.push(value);
    data.colors.push(color);
    saveData(data);
    updateChart();
    renderTable();
});

resetBtn.addEventListener('click', () => {
    resetData();
    updateChart();
    renderTable();
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

chartTypeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        myChart.config.type = btn.getAttribute('data-type');
        myChart.update();
    });
});

// Initialize table and chart
renderTable();
updateChart();
