const STORAGE_KEY = "ultimateChartData";

function loadData() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { labels: [], values: [], colors: [] };
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function resetData() {
    const empty = { labels: [], values: [], colors: [] };
    saveData(empty);
    return empty;
}
