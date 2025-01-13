const revenue = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

const total = Object.values(revenue).reduce((sum, valor) => sum + valor, 0);

Object.entries(revenue).forEach(([estado, valor]) => {
    const percentual = (valor / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
});

// SP: 37.53%
// RJ: 20.29%
// MG: 16.17%
// ES: 15.03%
// Outros: 10.98%