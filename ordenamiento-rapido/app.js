
// let array = [5, 9 , 7, 6, 11 , 3 , 4 , 2, 1 , 5];
let array = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9];

function quickSort(array, ini, fin) {

    const pivot = array[fin];
    let start = ini;
    let end = fin-1;

    while (start < end) {
        while (array[start] < pivot) {
            start++;
        }
        while (array[end] > pivot) {
            end--;
        }
        if (start < end) {
            swap(array, start, end)
        }else{
            swap(array, fin, start)
        }
    }
    
    if (ini<fin) {
        quickSort(array, ini, start-1);
        quickSort(array, end+1, fin)
    }
    return array;
}

function swap(arr, menor, mayor) {
    let aux = arr[menor];
    arr[menor] = arr[mayor];
    arr[mayor] = aux;
}

console.log(quickSort(array, 0 , array.length-1));