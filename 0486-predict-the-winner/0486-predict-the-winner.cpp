class Solution {
public:
    bool predictTheWinner(std::vector<int>& nums) {
        int n = nums.size();
        // dp[i] will store the maximum relative score a player can gain from subarray nums[i...j]
        std::vector<int> dp(n);

        // Base case: arrays of length 1
        for (int i = 0; i < n; ++i) {
            dp[i] = nums[i];
        }

        // Build the DP table for subarrays of increasing length
        for (int length = 2; length <= n; ++length) {
            for (int i = 0; i <= n - length; ++i) {
                int j = i + length - 1;
                // The current player can either take nums[i] or nums[j]
                // dp[i+1] represents the state after taking nums[i] (subarray i+1 to j)
                // dp[i] represents the state after taking nums[j] (subarray i to j-1)
                dp[i] = std::max(nums[i] - dp[i + 1], nums[j] - dp[i]);
            }
        }

        // If Player 1's net relative score is >= 0, Player 1 wins
        return dp[0] >= 0;
    }
};
