const fs = require('fs');

// Зчитування даних з файлу
const data = fs.readFileSync('input1.txt', 'utf8');
const lines = data.trim().split('\n');

const left = [];
const right = [];

// Заповнення масивів з файлу
lines.forEach(line => {
    const [a, b] = line.split(/\s+/).map(Number);
    left.push(a);
    right.push(b);
});

// Сортування обох масивів
left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

// Вирахування різниці між відповідними елементами
const differences = left.map((val, index) => Math.abs(val - right[index]));

// Знаходження загальної суми
const totalDifference = differences.reduce((sum, diff) => sum + diff, 0);

console.log('Загальна відстань:', totalDifference);
