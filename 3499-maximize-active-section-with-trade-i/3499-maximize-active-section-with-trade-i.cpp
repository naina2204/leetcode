class Solution {
public:
    int maxActiveSectionsAfterTrade(string s) {

        int totalOnes = 0;
        for(char c : s)
            if(c == '1')
                totalOnes++;

        string t = "1" + s + "1";

        vector<pair<char,int>> runs;

        // Run Length Encoding
        for(char c : t){
            if(runs.empty() || runs.back().first != c)
                runs.push_back({c,1});
            else
                runs.back().second++;
        }

        int ans = totalOnes;

        // Check every internal 1-block
        for(int i = 1; i < runs.size()-1; i++){
            if(runs[i].first == '1'){
                int leftZeros = runs[i-1].second;
                int rightZeros = runs[i+1].second;

                ans = max(ans, totalOnes + leftZeros + rightZeros);
            }
        }

        return ans;
    }
};