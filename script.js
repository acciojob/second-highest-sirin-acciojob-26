

function secondHighest(arr) {
    if (arr.length < 2) return -Infinity;

    let highest = -Infinity;
    let second_highest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            second_highest = highest;
            highest = arr[i];
        } else if (arr[i] > second_highest && arr[i] !== highest) {
            second_highest = arr[i];
        }
    }

    return second_highest === -Infinity ? -Infinity : second_highest;
}

