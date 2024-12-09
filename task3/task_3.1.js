const fs = require('fs');

function parsInput() {
    const data = fs.readFileSync('./task3/input3.txt', 'utf8');
    const re = /mul\((\d+),\s*(\d+)\)/g;
    let result = data.match(re);
    // console.log(result);
    const products = [];
    for (let num = 0; num < result.length; num++) {
        const match = /mul\((\d+),\s*(\d+)\)/.exec(result[num]);
        if (match) {
            const num1 = parseInt(match[1], 10);
            const num2 = parseInt(match[2], 10);
            const product = num1 * num2;
            products.push(product);
        }
    }
    console.log('Результати множення:', products);
    let sum = 0;
    for (let res = 0; res < products.length; res++) {
        sum += products[res];
    }
    console.log(`результат ${sum}`);
    
}

parsInput();


