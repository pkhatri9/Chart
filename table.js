const tbody = document.querySelector('#dataTable tbody');

function renderTable() {
    tbody.innerHTML = '';
    const data = loadData();
    data.labels.forEach((label, index) => {
        const row = document.createElement('tr');

        const labelCell = document.createElement('td');
        labelCell.textContent = label;

        const valueCell = document.createElement('td');
        valueCell.textContent = data.values[index];

        const colorCell = document.createElement('td');
        const colorBox = document.createElement('div');
        colorBox.style.width = '20px';
        colorBox.style.height = '20px';
        colorBox.style.backgroundColor = data.colors[index];
        colorCell.appendChild(colorBox);

        const actionCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            data.labels.splice(index,1);
            data.values.splice(index,1);
            data.colors.splice(index,1);
            saveData(data);
            updateChart();
            renderTable();
        };
        actionCell.appendChild(deleteBtn);

        row.appendChild(labelCell);
        row.appendChild(valueCell);
        row.appendChild(colorCell);
        row.appendChild(actionCell);
        tbody.appendChild(row);
    });
}
