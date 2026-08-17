var stoneGameV = function(stoneValue) {
    const n = stoneValue.length;
    const prefixSum = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + stoneValue[i];
    }
    
    // memo table initialized with -1
    const memo = Array.from({ length: n }, () => new Array(n).fill(-1));
    
    function getSum(l, r) {
        return prefixSum[r + 1] - prefixSum[l];
    }
    
    function solve(i, j) {
        if (i === j) return 0;
        if (memo[i][j] !== -1) return memo[i][j];
        
        let maxScore = 0;
        
        for (let k = i; k < j; k++) {
            const leftSum = getSum(i, k);
            const rightSum = getSum(k + 1, j);
            
            if (leftSum < rightSum) {
                maxScore = Math.max(maxScore, leftSum + solve(i, k));
            } else if (leftSum > rightSum) {
                maxScore = Math.max(maxScore, rightSum + solve(k + 1, j));
            } else {
                maxScore = Math.max(maxScore, leftSum + solve(i, k), leftSum + solve(k + 1, j));
            }
        }
        
        memo[i][j] = maxScore;
        return maxScore;
    }
    
    return solve(0, n - 1);
};
