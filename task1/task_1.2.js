const fs = require('fs');
const path = require('path');

// Функція для обчислення оцінки подібності
function calculateSimilarityScore(leftList, rightList) {
    const rightCount = {};
    rightList.forEach(num => {
        rightCount[num] = (rightCount[num] || 0) + 1;
    });

    const similarityScores = leftList.map(num => num * (rightCount[num] || 0));

    return similarityScores.reduce((sum, score) => sum + score, 0);
}

// Шлях до файлу
const filePath = path.join(__dirname, 'input1.txt');

// Читання файлу та обробка даних
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Помилка при читанні файлу:', err.message);
        return;
    }

    try {
        if (!data || data.trim() === '') {
            throw new Error('Файл порожній або не містить даних.');
        }

        // Обробка рядків, де кожен рядок містить два числа, розділені пробілом
        const leftList = [];
        const rightList = [];

        data.trim().split('\n').forEach(line => {
            const [left, right] = line.trim().split(/\s+/).map(Number);
            if (!isNaN(left) && !isNaN(right)) {
                leftList.push(left);
                rightList.push(right);
            }
        });

        if (leftList.length === 0 || rightList.length === 0) {
            throw new Error('Дані не містять коректних чисел.');
        }

        // Обчислення та виведення оцінки подібності
        const result = calculateSimilarityScore(leftList, rightList);
        console.log('Сума оцінок подібності:', result);

    } catch (e) {
        console.error('Помилка при обробці даних:', e.message);
    }
});
