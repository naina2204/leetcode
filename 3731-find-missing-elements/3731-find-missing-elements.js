function findMissingElements(nums) {
    // Convert array to a Set for O(1) fast lookups
    const numSet = new Set(nums);
    
    // Find the minimum and maximum boundaries of the original range
    const minNum = Math.min(...nums);
    const maxNum = Math.max(...nums);
    
    const missing = [];
    
    // Iterate through the full range sequentially
    for (let i = minNum; i <= maxNum; i++) {
        if (!numSet.has(i)) {
            missing.push(i);
        }
    }
    
    return missing;
}
