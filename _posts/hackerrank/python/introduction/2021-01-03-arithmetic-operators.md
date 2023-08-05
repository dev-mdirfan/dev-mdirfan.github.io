---
title: 03. Arithmetic Operators
author: irfan
date: 2021-01-03 11:33:00 +0800
categories: [HackerRank, Python Solution]
tags: [introduction, easy]
math: true
mermaid: true
image:
  path: /assets/images/posts/hackerrank/python/python_post_cover-dark.png
  alt: Arithmetic Operators
---

# **Problem:** [Arithmetic Operators](https://www.hackerrank.com/challenges/python-arithmetic-operators/) 

## Solution 1: Using print() function

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a+b)
    print(a-b)
    print(a*b)
```

## Solution 2: Using f-string

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(f'{a+b}\n{a-b}\n{a*b}')
```

## Solution 3: Using format()

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print('{}\n{}\n{}'.format((a+b),(a-b),(a*b)))
```

## Solution 4: Using sep parameter

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a+b, a-b, a*b, sep='\n')
```

## Solution 5: Using for loop

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    for i in range(3):
        if i == 0:
            print(a+b)
        elif i == 1:
            print(a-b)
        else:
            print(a*b)
```

## Solution 6: Using eval()

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(*map(eval, ['a+b', 'a-b', 'a*b']), sep='\n')
```

## Solution 7: Using eval() and for loop

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    for i in range(3):
        print(eval('a+b', 'a-b', 'a*b')[i])
```

## Solution 8: Using eval() and list comprehension

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(*[eval('a+b', 'a-b', 'a*b')[i] for i in range(3)], sep='\n')
```

## Solution 9: Using eval() and dictionary

```python
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(*[eval('a+b', 'a-b', 'a*b')[i] for i in range(3)], sep='\n')
```

## Solution 10: One liner solution

```python
a, b = int(input()), int(input())
print(f'{a+b}\n{a-b}\n{a*b}')
```

