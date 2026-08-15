/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let totalXor = 0;
    let hasNonZero = false;

    // Calculate total XOR and check if there's any non-zero element
    for (let i = 0; i < nums.length; i++) {
        totalXor ^= nums[i];
        if (nums[i] !== 0) {
            hasNonZero = true;
        }
    }

    // Case 1: Every element in the array is 0
    if (!hasNonZero) {
        return 0;
    }

    // Case 2: The entire array yields a non-zero XOR sum
    if (totalXor !== 0) {
        return nums.length;
    }

    // Case 3: Total XOR sum is 0, but non-zero elements exist
    return nums.length - 1;
};

