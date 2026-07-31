

class Solution {
public:
    int minimumPushes(std::string word) {
        int n = word.length();
        int totalPushes = 0;
        
        // Distribute letters evenly across the 8 available keys (2-9)
        for (int i = 0; i < n; ++i) {
            totalPushes += (i / 8) + 1;
        }
        
        return totalPushes;
    }
};
