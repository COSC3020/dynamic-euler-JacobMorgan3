const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);



function equalTo (a,b) { //function to test that my bottom up function gets the same result as the one we were given
    if (a === b)
        return true;
    else
        return false;
}


//Test 1    //test when n = 0
let n = 0;
let a = bottomUpEuler(n);
let b = e(n);
assert(equalTo(a,b));


//Test 2    //test when n = 1
n = 10;
a = bottomUpEuler(n);
b = e(n);
assert(equalTo(a,b));


//Test 3    //test when n = 5
n = 5;
a = bottomUpEuler(n);
b = e(n);
assert(equalTo(a,b));


//Test 4    //test when n = 100
n = 100;
a = bottomUpEuler(n);
b = e(n);
assert(equalTo(a,b));
