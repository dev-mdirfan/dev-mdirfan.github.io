---
title: 02. Dynamic Arrays
author: irfan
date: 2021-03-02 10:33:00 +0800
categories: [HackerRank, Problem Solving]
tags: [arrays, easy]
math: true
mermaid: true
image:
  path: /assets/images/posts/hackerrank/problem-solving/problem-solving.png
  alt: Dynamic Arrays
---

# **Problem:** [Dynamic Arrays](https://www.hackerrank.com/challenges/dynamic-array/)

## Solution 1: Using for loop and if-else statement
```python
def dynamicArray(n, queries):
    seqList = [[] for _ in range(n)]
    lastAnswer = 0
    result = []

    for query in queries:
        index = (query[1] ^ lastAnswer) % n

        if query[0] == 1:
            seqList[index].append(query[2])
        else:
            lastAnswer = seqList[index][query[2] % len(seqList[index])]
            result.append(lastAnswer)

    return result
```








