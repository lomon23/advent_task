const fs = require('fs');

// Функція для перевірки правильності рядка
function isValidLine(numbers) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < numbers.length - 1; i++) {
        const diff = numbers[i + 1] - numbers[i];

        // Перевірка, чи різниця між сусідніми числами в межах 1..3
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false; // Якщо різниця поза допустимими межами, рядок неправильний
        }

        // Перевірка зростання і спадання
        if (diff > 0) {
            isDecreasing = false; // Якщо є зростання, рядок не спадає
        } else if (diff < 0) {
            isIncreasing = false; // Якщо є спадання, рядок не зростає
        }
    }

    // Рядок правильний, якщо він або зростає, або спадає
    return isIncreasing || isDecreasing;
}

// Читання файлу та обробка рядків
fs.readFile('./task2/input2.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Помилка при читанні файлу:", err);
        return;
    }

    // Поділ на рядки
    const lines = data.trim().split('\n');
    let correctCount = 0;
    let incorrectCount = 0;

    // Перевірка кожного рядка
    lines.forEach(line => {
        const numbers = line.trim().split(' ').map(Number);

        if (isValidLine(numbers)) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    });

    // Виведення результатів
    console.log(`Кількість правильних рядків: ${correctCount}`);
    console.log(`Кількість неправильних рядків: ${incorrectCount}`);
});
