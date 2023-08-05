---
title: 02. Python If-Else
author: irfan
date: 2021-01-02 11:33:00 +0800
categories: [HackerRank, Python Solution]
tags: [introduction, easy]
math: true
mermaid: true
image:
  path: /assets/images/posts/hackerrank/python/python_post_cover-dark.png
  alt: Python If-Else
---

# **Problem:** [Python If-Else](https://www.hackerrank.com/challenges/py-if-else)

## Solution 1: Using nested if-else statements


```python
n = int(input().strip())
if n%2==1:
        print('Weird')
else:
    if 2<=n<=5:
        print('Not Weird')
    elif 6<=n<=20:
        print('Weird')
    else:
        print('Not Weird')
```

## Solution 2: Using if-else statements

```python
if __name__ == '__main__':
    n = int(input().strip())
    if n % 2 != 0:
        print("Weird")
    elif n % 2 == 0 and n in range(2, 6):
        print("Not Weird")
    elif n % 2 == 0 and n in range(6, 21):
        print("Weird")
    elif n % 2 == 0 and n > 20:
        print("Not Weird")
```

## Solution 3: Using multiple conditions in one if statements

```python
if __name__ == '__main__':
    n = int(input().strip())
    if n%2 or 6 <= n <= 20:
        print('Weird')
    else:
        print('Not Weird') 
```

## Solution 4: One liner solution

```python
n = int(input())
print('Weird' if n%2 or n in range(6, 21) else 'Not Weird')
```

