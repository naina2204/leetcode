/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    const charCounts = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];
        
        // Add the current character to the frequency map
        charCounts.set(rightChar, (charCounts.get(rightChar) || 0) + 1);

        // Shrink the window from the left if any character count exceeds 2
        while (charCounts.get(rightChar) > 2) {
            const leftChar = s[left];
            charCounts.set(leftChar, charCounts.get(leftChar) - 1);
            left++;
        }

        // Calculate and update the maximum length
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
