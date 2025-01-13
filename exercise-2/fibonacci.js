function isFibonacci(num) {
    let a = 0, b = 1;

    while (b < num) {
        [a, b] = [b, a + b];
    }

    return b === num || num === 0;
}

process.stdout.write('Digite um número para verificar se pertence à sequência de Fibonacci (ou pressione Enter para usar 34): ');

process.stdin.once('data', (data) => {
    const input = data.toString().trim();
    const num = input === '' ? 34 : parseInt(input, 10);

    if (isNaN(num)) {
        console.log('Por favor, insira um número válido.');
    } else {
        if (isFibonacci(num)) {
            console.log(`${num} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`${num} NÃO pertence à sequência de Fibonacci.`);
        }
    }

    process.stdin.pause();
});

// Caso seja informado um valor pelo usuário, será utilizado o valor informado.
// Se não, será utilizado o número padrão 34.