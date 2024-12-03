function isSafeReport(report) {
    const levels = report.split(' ').map(Number);

    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < levels.length; i++) {
        const diff = levels[i] - levels[i - 1];

        if (diff < 1 || diff > 3) return false; // Умова на різницю
        if (diff > 0) decreasing = false;
        if (diff < 0) increasing = false;
    }

    return increasing || decreasing; // Має бути або зростаючим, або спадаючим
}

// Аналізуємо всі рапорти
const reports = [
    "7 6 4 2 1",
    "1 2 7 8 9",
    "9 7 6 2 1",
    "1 3 2 4 5",
    "8 6 4 4 1",
    "1 3 6 7 9"
];

const safeReports = reports.filter(isSafeReport);
console.log("Кількість безпечних рапортів:", safeReports.length);

