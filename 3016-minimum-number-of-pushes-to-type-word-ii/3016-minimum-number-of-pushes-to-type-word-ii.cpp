
class Solution {
public:
    int minimumPushes(std::string word) {
        std::vector<int> count(26, 0);
        for (char c : word) {
            count[c - 'a']++;
        }
        
        std::sort(count.rbegin(), count.rend());
        
        int total_pushes = 0;
        for (int i = 0; i < 26; ++i) {
            if (count[i] == 0) break;
            total_pushes += count[i] * ((i / 8) + 1);
        }
        
        int ans = total_pushes;
        return ans;
    }
};
