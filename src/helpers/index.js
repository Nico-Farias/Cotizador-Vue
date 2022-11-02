
const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    if (cantidad < 25000) {
        total = cantidad * 1.5;
    } else if (cantidad >= 25000 && cantidad < 50000) {
        total = cantidad * 1.4;
    } else if (cantidad >= 50000 && cantidad < 75000) {
        total = cantidad * 1.3;
    } else {
        total = cantidad * 1.2;
    }

    if (plazo === 6) {
        total *= 1.1;
    } else if (plazo === 12) {
        total *= 1.2;
    } else {
        total *= 1.3;
    }


    return total;

}

export {
    calcularTotalPagar
}