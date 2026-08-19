/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];
    const n = nums.length;
    
    // 1. Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    // 2. First pointer loop
    for (let i = 0; i < n - 3; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        // 3. Second pointer loop
        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicate values for the second element
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            
            // 4. Two-pointer setup for the remaining two elements
            let left = j + 1;
            let right = n - 1;
            
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                    // Skip duplicates for the third element
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicates for the fourth element
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    
                    // Move both pointers inward
                    left++;
                    right--;
                } else if (sum < target) {
                    left++; // Sum is too small, move left pointer right
                } else {
                    right--; // Sum is too large, move right pointer left
                }
            }
        }
    }
    
    return result;
};
