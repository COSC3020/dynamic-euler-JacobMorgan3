function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}



function bottomUpEuler(n) {
    if (n === 0)
        return 1;
    else {
        let fact = 1, e = 1;
        for (let i = 1; i <= n; i++) {
            fact = fact * i;
            e = e + 1.0/fact; 
        }
        return e;
    }
}


//add so i can test functions
module.exports = {bottomUpEuler, e, factorial};
