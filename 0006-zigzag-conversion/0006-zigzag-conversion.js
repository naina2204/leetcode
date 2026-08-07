function convert(s, numRows) {
    // Edge case: if rows are 1 or string is too short, pattern doesn't change
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    // Create an array of strings representing each row
    const rows = Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;

    // Iterate through each character in the string
    for (const char of s) {
        rows[currentRow] += char;

        // Change direction when hitting the top or bottom row
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move to the next row index based on the direction
        currentRow += goingDown ? 1 : -1;
    }

    // Combine all rows to form the final string
    return rows.join("");
}
