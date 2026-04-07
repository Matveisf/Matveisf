function getbyIdx(arr, idx) {
    if (idx < 0 || idx >= arr.length) {
        return "elemento no existe";
    } else {
        return arr[idx];
    }
}

let resultado = getbyIdx([1, 2, 3, 4, 5], 2);
console.log(resultado);