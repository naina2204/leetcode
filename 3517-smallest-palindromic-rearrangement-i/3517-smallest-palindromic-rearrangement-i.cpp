
class Solution {
public:
    std::string smallestPalindrome(std::string s) {
        // Count character frequencies
        std::vector<int> count(26, 0);
        for (char c : s) {
            count[c - 'a']++;
        }
        
        std::string left_half = "";
        char middle_char = 0;
        
        // Build the lexicographically smallest left half
        for (int i = 0; i < 26; ++i) {
            if (count[i] % 2 != 0) {
                middle_char = 'a' + i; // Track the odd character for the center
            }
            // Add half of the characters to the left half string
            left_half.append(count[i] / 2, 'a' + i);
        }
        
        // The right half is simply the reversed left half
        std::string right_half = left_half;
        std::reverse(right_half.begin(), right_half.end());
        
        // Combine all parts
        if (middle_char != 0) {
            return left_half + middle_char + right_half;
        }
        return left_half + right_half;
    }
};
