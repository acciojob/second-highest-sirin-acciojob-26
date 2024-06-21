//your JS code here. If required.
function secondHighest(arr) {
    // If array is empty or has only one element, return -Infinity
    if (arr.length < 2) {
        return -Infinity;
    }

    // Create a set to remove duplicates
    const uniqueValues = new Set(arr);

    // Convert set back to array and sort in descending order
    const uniqueArr = Array.from(uniqueValues).sort((a, b) => b - a);

    // If there are less than 2 unique elements, return -Infinity
    if (uniqueArr.length < 2) {
        return -Infinity;
    }

    // Return the second highest element
    return uniqueArr[1];
}


