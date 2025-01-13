const fs = require('fs');

function readJsonFile(fileName) {
    try {
        const content = fs.readFileSync(fileName, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.error(`Erro ao abrir o arquivo ${fileName}:`, error.message);
        process.exit(1);
    }
}

function main() {
    const json = readJsonFile('dados.json');

    if (!Array.isArray(json)) {
        console.error("Erro: O JSON não é um array.");
        process.exit(1);
    }

    let smallestInvoice = 0;
    let biggestInvoice = 0;
    let sumInvoice = 0;
    let daysWithValue = 0;
    let daysAboveAverage = 0;

    for (const day of json) {
        const value = day.valor;

        if (value > 0) {
            if (value < smallestInvoice || smallestInvoice === 0) {
                smallestInvoice = value;
            }
            if (value > biggestInvoice || biggestInvoice === 0) {
                biggestInvoice = value;
            }
            sumInvoice += value;
            daysWithValue++;
        }
    }

    const avgInvoice = sumInvoice / daysWithValue;

    for (const day of json) {
        const value = day.valor;

        if (value > avgInvoice) {
            daysAboveAverage++;
        }
    }

    console.log(`Menor valor de faturamento: ${smallestInvoice.toFixed(2)}`);
    console.log(`Maior valor de faturamento: ${biggestInvoice.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${daysAboveAverage}`);
}

main();

// Menor valor de faturamento: 373.78
// Maior valor de faturamento: 48924.24
// Número de dias com faturamento acima da média: 10