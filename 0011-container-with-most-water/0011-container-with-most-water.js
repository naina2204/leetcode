function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // Calculate the width between the two lines
        const width = right - left;
        
        // The water height is limited by the shorter line
        const currentHeight = Math.min(height[left], height[right]);
        
        // Calculate the current area and update maxWater if it's larger
        const currentWater = width * currentHeight;
        maxWater = Math.max(maxWater, currentWater);

        // Move the pointer pointing to the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}
