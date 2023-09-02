---
title: Largest Rectangle
author: irfan
date: 2023-02-02 10:33:00 +0800
categories: [HackerRank, Problem Solving]
tags: [arrays, medium]
math: true
mermaid: true
image:
    path: /assets/images/posts/hackerrank/problem-solving/problem-solving.png
    alt: largest rectangle
---

# **Problem:** [Largest Rectangle](https://www.hackerrank.com/challenges/largest-rectangle/problem)

<br />

## Solution 1: Using for loop and if-else statement

**Time Complexity:** O(n^2) - (TLE)

```python
def largestRectangle(h):
    max_area = 0
    for i in range(len(h)):
        min_height = h[i]
        for j in range(i, len(h)):
            min_height = min(min_height, h[j])
            max_area = max(max_area, min_height * (j - i + 1))
    return max_area
```

## Solution 2: Using loops

**Time Complexity:** O(n^2)

```python
def largestRectangle(h):
    # Write your code here
    n = len(h)
    m = 0
    for i in range(n):
        j = i
        ans = 0
        while 0 <= j :
            if h[j] >= h[i]:
                ans += h[i]
            else:
                break
            j -= 1
        j = i + 1
        while j < n:
            if h[j] >= h[i]:
                ans += h[i]
            else:
                break
            j += 1
        m = max(m, ans)
    return m
```






