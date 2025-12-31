function atmFunc(input) {
    if (input < 500) {
        return "amount must be at least 500";
    }
    const denominations = [ 5000, 1000, 500, 100, 50,10];
    let result = {};
    for (let denom of denominations) {
        let count = Math.floor(input / denom);
        input = input % denom;
        result[denom] = count;
    }
    return result;

    
}
console.log(atmFunc(12500));