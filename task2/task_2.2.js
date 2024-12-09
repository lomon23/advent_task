const fs = require('fs');

// Функція для перевірки, чи рядок безпечний
function isSafeReport(numbers) {
    // Перевірка, чи рядок монотонний (зростає або спадає)
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] < numbers[i + 1]) isDecreasing = false;
        if (numbers[i] > numbers[i + 1]) isIncreasing = false;

        // Якщо різниця між сусідніми більше 3, рядок одразу неправильний
        if (Math.abs(numbers[i] - numbers[i + 1]) > 3) {
            return false;
        }
    }

    return isIncreasing || isDecreasing;
}

// Функція для перевірки, чи рядок стає безпечним при видаленні одного числа
function canBeSafeByRemovingOne(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const filteredNumbers = numbers.slice(0, i).concat(numbers.slice(i + 1));
        if (isSafeReport(filteredNumbers)) {
            return true;
        }
    }
    return false;
}

// Основна логіка програми
fs.readFile('./task2/input2.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Помилка при читанні файлу:", err);
        return;
    }

    const lines = data.trim().split('\n');
    let safeCount = 0;
    let unsafeCount = 0;

    lines.forEach(line => {
        const numbers = line.trim().split(' ').map(Number);

        // Перевірка, чи рядок безпечний
        if (isSafeReport(numbers) || canBeSafeByRemovingOne(numbers)) {
            safeCount++;
        } else {
            unsafeCount++;
        }
    });

    console.log(`Кількість безпечних звітів: ${safeCount}`);
    console.log(`Кількість небезпечних звітів: ${unsafeCount}`);
});
