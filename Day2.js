function shuffleArray(arr) {
    let n = arr.length / 2;
    let result = [];

    // arr.length = 10; [0 -9] = [0, 5, 1, 6, 2, 7, 3, 8, 4, 9] index base values
    // i = 0 ; n = 5;
    for (let i = 0; i < n; i++) {
        result.push(arr[i], arr[i + n])
    }

    return result;
}

console.log(shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(shuffleArray(['a', 'b', 'c', 'd', 'e', -5, 23, 7.6, 55, 9]));