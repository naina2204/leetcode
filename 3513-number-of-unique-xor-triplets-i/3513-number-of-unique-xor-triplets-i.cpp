class Solution {
public:
    int uniqueXorTriplets(vector<int>& nums) {
        int n = nums.size();
        if (n <= 2) return n;
        
        // __builtin_clz finds the number of leading zeros
        return 1 << (32 - __builtin_clz(n));
    }
};
