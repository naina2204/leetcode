class Solution {
public:
    int uniqueXorTriplets(vector<int>& nums) {
        const int MAXX = 2048;

        vector<bool> one(MAXX, false);
        vector<bool> two(MAXX, false);
        vector<bool> three(MAXX, false);

        for (int x : nums) {
            vector<bool> newOne = one;
            vector<bool> newTwo = two;
            vector<bool> newThree = three;

            // Single element
            newOne[x] = true;

            // Two elements
            newTwo[x ^ x] = true;
            for (int i = 0; i < MAXX; i++) {
                if (one[i])
                    newTwo[i ^ x] = true;
            }

            // Three elements
            newThree[x ^ x ^ x] = true;
            for (int i = 0; i < MAXX; i++) {
                if (two[i])
                    newThree[i ^ x] = true;
            }

            one = move(newOne);
            two = move(newTwo);
            three = move(newThree);
        }

        int ans = 0;
        for (bool x : three)
            if (x) ans++;

        return ans;
    }
};