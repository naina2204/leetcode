function threeSum(nums) {
    const results = [];
    
    // 1. Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // 2. Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        // 3. Optimization: If the lowest number is greater than 0, 
        // no three numbers can sum to 0
        if (nums[i] > 0) break;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        // 4. Use two pointers to find matching pairs
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                
                // 5. Skip duplicates for the second and third elements
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                // Move both pointers inward
                left++;
                right--;
            } else if (sum < 0) {
                // Sum is too small, move left pointer right to increase sum
                left++;
            } else {
                // Sum is too large, move right pointer left to decrease sum
                right--;
            }
        }
    }
    
    return results;
}
