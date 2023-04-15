function calculate() {
    const employee1date = new Date(document.getElementById("employee1date").value);
    const employee2date = new Date(document.getElementById("employee2date").value);
    const employee3date = new Date(document.getElementById("employee3date").value);
    const employee4date = new Date(document.getElementById("employee4date").value);
    const employee5date = new Date(document.getElementById("employee5date").value);

    const yearsOfWork = [
        new Date().getFullYear() - employee1date.getFullYear(),
        new Date().getFullYear() - employee2date.getFullYear(),
        new Date().getFullYear() - employee3date.getFullYear(),
        new Date().getFullYear() - employee4date.getFullYear(),
        new Date().getFullYear() - employee5date.getFullYear()
    ];

    const averageYears = Math.floor(averageYearsOfWork(yearsOfWork));

    document.getElementById("result").textContent = `Середній стаж роботи на поточний момент: ${averageYears} років`;
}

function averageYearsOfWork(years) {
    const sum = years.reduce((acc, cur) => acc + cur, 0);
    return sum / years.length;
}