---
title: 931. Minimum Falling Path Sum
author: irfan
date: 2023-05-04 09:10:23 +0800
categories: [Tutorials, Leetcode]
tag: [leetcode]
math: true
---


## 931. Minimum Falling Path Sum

```python
import math
# INT_MAX = 100 x 100
class Solution:
    def solve(self, row, col, matrix):
        # if 0 <= col <= self.m:
        #     # Do This
        if col < 0  or col >= self.m:
            return inf
        if row == self.n - 1:
            return matrix[row][col]
        # if row == self.n:
        #     return 0
        ans1 = matrix[row][col] + self.solve(row+1, col-1, matrix)
        ans2 = matrix[row][col] + self.solve(row+1, col, matrix)
        ans3 = matrix[row][col] + self.solve(row+1, col+1, matrix)
        return min(ans1, ans2, ans3)

    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        minPathSum = inf
        # minPathSum = 10000
        self.n = len(matrix)
        self.m = len(matrix[0])
        for col in range(self.m):
            pathSum = self.solve(0, col, matrix)
            minPathSum = min(minPathSum, pathSum)
        return minPathSum
```


