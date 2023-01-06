// recursive
const start = performance.now();
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}

console.log(rFib(20));
// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
} //
console.log(iFib(20) + ' El más rápido es la iterativa');
function fibonacci(num) {
    let array = [0, 1];
    if (num == 0){
        return array
    }else{
        array.push(array[array.length - 1] + array[array.length - 2]);
        fibonacci(num-1)
    }
}
console.log(fibonacci(20));