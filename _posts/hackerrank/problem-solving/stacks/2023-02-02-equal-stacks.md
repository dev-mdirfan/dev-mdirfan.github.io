---
title: Equal Stacks
author: irfan
date: 2023-02-02 10:33:00 +0800
categories: [HackerRank, Problem Solving]
tags: [stacks, arrays, easy]
math: true
mermaid: true
image:
    path: /assets/images/posts/hackerrank/problem-solving/problem-solving.png
    alt: Equal Stacks
---

# **Problem:** [Equal Stacks](https://www.hackerrank.com/challenges/equal-stacks/problem)

<br />

## Solution 1: Using while loop and if-else statement

```python
def equalStacks(h1, h2, h3):
    s1, s2, s3 = sum(h1), sum(h2), sum(h3)
    while h1 and h2 and h3:
        m = min(s1, s2, s3)
        while s1 > m:
            s1 -= h1.pop(0)
        while s2 > m:
            s2 -= h2.pop(0)
        while s3 > m:
            s3 -= h3.pop(0)
        if s1 == s2 == s3:
            return s1
    return 0
```

## Solution 2: Using while loop and if-else statement

```python
def equalStacks(h1, h2, h3):
    # Write your code here
    s1, s2, s3 = sum(h1), sum(h2), sum(h3)
    while len(h1) != 0 and len(h2) != 0 and len(h3) != 0:
        if s1 == s2 and s2 == s3:
            return s1
        elif s1 >= s2 and s1 >= s3:
            s1 -= h1.pop(0)
        elif s2 >= s1 and s2 >= s3:
            s2 -= h2.pop(0)
        elif s3 >= s1 and s3 >= s2:
            s3 -= h3.pop(0)
    return 0
```

## Solution 3: using dequeue

```python
from collections import deque

def equalStacks(h1, h2, h3):
    d1,d2,d3 = deque(h1),deque(h2),deque(h3)
    s1,s2,s3 = sum(h1),sum(h2),sum(h3)

    # O(max(l1,l2,l3)), l1,l2,l3 - initial lengths
    while d1 and d2 and d3: 
        if s1 == s2 == s3:
            return s1
        # O(3) => O(1)
        maxs = max(s1,s2,s3) 
        if s1 == maxs:
            s1 -= d1.popleft()
        elif s2 == maxs:
            s2 -= d2.popleft()
        elif s3 == maxs:
            s3 -= d3.popleft()
    
    return 0
```








