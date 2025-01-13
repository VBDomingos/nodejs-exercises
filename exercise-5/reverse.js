function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

process.stdout.write('Informe uma string: ');

process.stdin.once('data', (data) => {
    const input = data.toString().trim();
    const str = input === '' ? 'Olá mundo!' : input

    const reversedStr = reverseString(str);

    console.log('String invertida:', reversedStr);

    process.stdin.pause();
});

// Caso seja informado uma string pelo usuário, será utilizado a string informada.
// Se não, será utilizado a string padrão 'Olá mundo!'.