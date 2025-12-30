document.getElementById('exportPNG').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'chart.png';
    link.href = document.getElementById('myChart').toDataURL();
    link.click();
});

document.getElementById('exportCSV').addEventListener('click', () => {
    const data = loadData();
    let csv = 'Label,Value,Color\n';
    data.labels.forEach((label, i) => {
        csv += `${label},${data.values[i]},${data.colors[i]}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chart_data.csv';
    a.click();
});
