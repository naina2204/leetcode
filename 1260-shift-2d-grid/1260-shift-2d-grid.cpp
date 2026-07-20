#include <vector>

class Solution {
public:
    std::vector<std::vector<int>> shiftGrid(std::vector<std::vector<int>>& grid, int k) {
        int m = grid.size();
        int n = grid[0].size();
        
        std::vector<std::vector<int>> result(m, std::vector<int>(n));
        
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                // Calculate the 1D index, add k shifts, and map back to 2D
                int original_idx = i * n + j;
                int new_idx = (original_idx + k) % (m * n);
                
                int new_i = new_idx / n;
                int new_j = new_idx % n;
                
                result[new_i][new_j] = grid[i][j];
            }
        }
        
        return result;
    }
};