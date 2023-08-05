---
title: 07. Write a function
author: irfan
date: 2021-01-07 02:33:00 +0800
categories: [HackerRank, Python Solution]
tags: [introduction, medium]
math: true
mermaid: true
image:
  path: /assets/images/posts/hackerrank/python/python_post_cover-dark.png
  alt: Write a function
---

# **Problem:** [Write a function](https://www.hackerrank.com/challenges/write-a-function/)

## Solution 1: Using if else statement

```python
def is_leap(year):
    if year % 400 == 0:
        return True
    elif year % 100 == 0:
        return False
    elif year % 4 == 0:
        return True
    else:
        return False

year = int(input())
print(is_leap(year))
```


## Solution 2: Using nested if-else statement

```python
def is_leap(year):
    leap = False
    
    # Write your logic here
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                leap = True
        else:
            leap = True
    
    return leap

year = int(input())
print(is_leap(year))
```

## Solution 3: Using if-else statement and one-liner

```python
def is_leap(year):
    leap = False
    
    # Write your logic here
    leap = True if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0) else False
    
    return leap

year = int(input())
print(is_leap(year))
```

## Solution 4: Using calendar module

```python
import calendar

def is_leap(year):
    leap = False
    
    # Write your logic here
    leap = calendar.isleap(year)
    
    return leap

year = int(input())
print(is_leap(year))
```

## Solution 5: Using lambda function

```python
is_leap = lambda year: calendar.isleap(year)
```

## Solution 6: Using one-liner

```python
import calendar
print((lambda year: calendar.isleap(year))(int(input())))


# or

def is_leap(year):    
    # Write your logic here
    return True if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0) else False

print(is_leap(int(input())))

# or

print((year % 400 == 0) or (( year % 100 != 0) and (year % 4 == 0)))

```

## Solution 7: Using one-liner and ternary operator

```python
from calendar import isleap
print('True' if isleap(int(input())) else 'False')
```

