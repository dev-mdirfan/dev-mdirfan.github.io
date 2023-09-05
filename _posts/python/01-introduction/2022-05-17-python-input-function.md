---
title: 06. Input Function in Python
author: irfan
date: 2022-05-17 11:33:00 +0800
categories: [Python, 01. Introduction]
tags: [input function]
math: true
mermaid: true
image:
  path: /assets/images/posts/python/introduction/introduction.png
  alt: input function in python
---

`input()` function is used to take input from user.

## Syntax

```py
input("Enter your name: ")
```

## Example

```py
name = input("Enter your name: ")
print("Hello", name)
```

## Type Conversion

```py
# input() function always return string
# to convert string to int use int()
age = int(input("Enter your age: "))
print("Your age is", age)
```

```python
print("Enter your number:")
var = input()
print("You have entered:", var)
# print("After 10 adding:",var + 10)    # Error str and int can't added
print("Type of var:", type(var))
print("Correct way to add 10:", int(var) + 10)

# Enter your number:
# 23
# You have entered: 23
# Type of var: <class 'str'>
# Correct way to add 10: 33
```

## Multiple Input

```py
# Multiple input
name, age = input("Enter your name and age: ").split()
print("Hello", name)
print("Your age is", age)
```




