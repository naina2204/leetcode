function letterCombinations(digits) {
    if (!digits || digits.length === 0) return [];

    const map = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    const result = [];

    function backtrack(index, currentString) {
        if (currentString.length === digits.length) {
            result.push(currentString);
            return;
        }

        const letters = map[digits[index]];
        for (const letter of letters) {
            backtrack(index + 1, currentString + letter);
        }
    }

    backtrack(0, "");
    return result;
}
