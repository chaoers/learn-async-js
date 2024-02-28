function sumOfRow(arr, row) {
    return new Promise((resolve, reject) => {
        if (arr.length > row) {
            setTimeout( () => {
                let sum = 0;
                for (let i = 0; i < arr[row].length; i++) {
                    sum += arr[row][i];
                }
                resolve(sum);
            }, 0);
        }

    })
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];