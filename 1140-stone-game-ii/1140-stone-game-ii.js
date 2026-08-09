function stoneGameII(piles) {
    const n = piles.length;
    const suffixSums = new Array(n + 1).fill(0);
    
    // Precompute remaining stones using suffix sums
    for (let i = n - 1; i >= 0; i--) {
        suffixSums[i] = suffixSums[i + 1] + piles[i];
    }
    
    // Memoization table using a 2D matrix
    const memo = Array.from({ length: n }, () => new Array(n + 1).fill(0));
    
    function dp(i, m) {
        if (i >= n) return 0;
        // If a player can take all remaining piles, do it
        if (i + 2 * m >= n) return suffixSums[i];
        if (memo[i][m] !== 0) return memo[i][m];
        
        let minOpponentStones = Infinity;
        
        // Try taking X piles from 1 to 2M
        for (let x = 1; x <= 2 * m; x++) {
            minOpponentStones = Math.min(minOpponentStones, dp(i + x, Math.max(m, x)));
        }
        
        // Current player gets all remaining stones minus what the opponent optimally gets
        memo[i][m] = suffixSums[i] - minOpponentStones;
        return memo[i][m];
    }
    
    return dp(0, 1);
}

