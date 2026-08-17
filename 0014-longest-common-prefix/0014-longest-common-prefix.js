/**
 * Finds the longest common prefix string amongst an array of strings.
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    // Return empty string if the array is empty
    if (!strs || strs.length === 0) return "";
    
    // Initialize the prefix with the first string
    let prefix = strs[0];
    
    // Compare the prefix with all other strings in the array
    for (let i = 1; i < strs.length; i++) {
        // Shrink the prefix character by character until it matches the start of strs[i]
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length - 1);
            
            // If the prefix shrinks to an empty string, there is no common prefix
            if (prefix === "") return "";
        }
    }
    
    return prefix;
}

// --- Example Test Cases ---
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));     // Output: ""
