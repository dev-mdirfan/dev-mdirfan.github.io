---
title: 04. Python Division
author: irfan
date: 2021-01-04 11:33:00 +0800
categories: [HackerRank, Python Solution]
tags: [introduction, easy]
math: true
mermaid: true
image:
  path: /assets/images/posts/hackerrank/python/python_post_cover-dark.png
  alt: Python Division
---

# **Problem:** [Python Division](https://www.hackerrank.com/challenges/python-division/)

## Solution 1: Using print() function

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a//b)
    print(a/b)
```

## Solution 2: Using f-string

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(f'{a//b}\n{a/b}')
```

## Solution 3: Using format()

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print('{}\n{}'.format((a//b),(a/b)))
```

## Solution 4: Using sep parameter

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a//b, a/b, sep='\n')
```

## Solution 5: Using round() function

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(round(a/b))
    print(round(a/b, 6))
```







