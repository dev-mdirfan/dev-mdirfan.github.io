---
title: 07. Add two numbers | Exercise
author: irfan
date: 2022-05-18 11:33:00 +0800
categories: [Python, 01. Introduction]
tags: [python exercise, input function]
math: true
mermaid: true
image:
  path: /assets/images/posts/python/introduction/introduction.png
  alt: python exercise
---

Write a program to add two numbers using `input()` function.

## Solution 1

```py
# Add two numbers
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
print("Sum of", num1, "and", num2, "is", num1 + num2)

# Output
# Enter first number: 12
# Enter second number: 13
# Sum of these two numbers is: 25
```

## Solution 2

```python
# Add two numbers
a, b = input("Enter two number: ").split()
print("Sum of two number:", int(a) + int(b))
```
