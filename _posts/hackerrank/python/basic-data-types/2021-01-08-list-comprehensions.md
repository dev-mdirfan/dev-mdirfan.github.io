---
title: 08. List Comprehensions
author: irfan
date: 2021-01-08 01:33:00 +0800
categories: [HackerRank, Python Solution]
tags: [basic data types, easy]
math: true
mermaid: true
image:
  path: /assets/images/posts/hackerrank/python/python_post_cover-dark.png
  alt: List Comprehensions
---

# **Problem:** [List Comprehensions](https://www.hackerrank.com/challenges/list-comprehensions/)


## Solution 1: Using for loop and if-else statement

```python
x = int(input())
y = int(input())
z = int(input())
n = int(input())

arr = []

for i in range(x + 1):
    for j in range(y + 1):
        for k in range(z + 1):
            if i + j + k != n:
                arr.append([i, j, k])

print(arr)
```

## Solution 2: Using for loop and if-else statement and one-liner

```python
x = int(input())
y = int(input())
z = int(input())
n = int(input())

print([[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != n])
```




