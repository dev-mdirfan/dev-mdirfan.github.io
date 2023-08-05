---
title: 05. Print Function
author: irfan
date: 2021-01-06 10:33:00 +0800
categories: [HackerRank, Python Solution]
tags: [introduction, easy]
math: true
mermaid: true
image:
  path: /assets/images/posts/hackerrank/python/python_post_cover-dark.png
  alt: Print Function
---

# **Problem:** [Print Function](https://www.hackerrank.com/challenges/python-print/)

## Solution 1: Using for loop

```python
if __name__ == '__main__':
    n = int(input())
    for i in range(n):
        print(i+1, end='')
```

## Solution 2: Using while loop

```python
if __name__ == '__main__':
    n = int(input())
    i = 1
    while i <= n:
        print(i, end='')
        i += 1
```

## Solution 3: Using list comprehension

```python
if __name__ == '__main__':
    n = int(input())
    print(*[i for i in range(1, n+1)], sep='')
```

## Solution 4: Using map() function

```python
if __name__ == '__main__':
    n = int(input())
    print(*map(str, range(1, n+1)), sep='')
```

## Solution 5: Using generator expression

```python
if __name__ == '__main__':
    n = int(input())
    print(*list(i for i in range(1, n+1)), sep='')
```

## Solution 6: Using generator function

```python
def gen_numbers(n):
    for i in range(1, n+1):
        yield i

if __name__ == '__main__':
    n = int(input())
    print(*gen_numbers(n), sep='')
```

## Solution 7: Using one-liner

```python
if __name__ == '__main__':
    print(*[i for i in range(1, int(input())+1)], sep='')

# or

if __name__ == '__main__':
    print(*range(1, int(input())+1), sep='')

# or
if __name__ == '__main__':
    print(''.join(map(str,range(1, int(input())+1))))

# or

if __name__ == '__main__':
    list(map(lambda x:print(x + 1, end=''), range(int(input()))))
```