function sum(a, b) {
    return a+b;
}

(a, b) => {
    return a+b;
} 

const min = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return;
    } 
    if (a < b) {
        return a;
    }
    return b;
}