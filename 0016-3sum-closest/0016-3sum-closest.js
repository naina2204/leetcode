function threeSumClosest(nums, target) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    // Initialize the closest sum with the first possible triplet sum
    let closestSum = nums[0] + nums[1] + nums[2];
    
    // Iterate through the array up to the third to last element
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            
            // If we found an exact match, return it immediately
            if (currentSum === target) {
                return currentSum;
            }
            
            // If the current sum is closer to target, update closestSum
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            
            // Move pointers closer to the target
            if (currentSum < target) {
                left++; // Increase sum by moving left pointer right
            } else {
                right--; // Decrease sum by moving right pointer left
            }
        }
    }
    
    return closestSum;
}
