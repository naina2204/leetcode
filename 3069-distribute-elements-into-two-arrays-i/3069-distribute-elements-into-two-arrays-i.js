/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    // Step 1: Initialize arr1 with the first element and arr2 with the second element
    const arr1 = [nums[0]];
    const arr2 = [nums[1]];
    
    // Step 2: Loop through the remaining elements starting from index 2
    for (let i = 2; i < nums.length; i++) {
        // Compare the last elements of both arrays
        if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
            arr1.push(nums[i]);
        } else {
            arr2.push(nums[i]);
        }
    }
    
    // Step 3: Concatenate arr1 and arr2 to form the final result
    return arr1.concat(arr2);
};

// --- Test Cases to Verify the Code ---
console.log(resultArray([2, 1, 3]));    // Output: [2, 3, 1]
console.log(resultArray([5, 4, 3, 8])); // Output: [5, 3, 4, 8]
