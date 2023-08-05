---
title: 03. Print Function
author: irfan
date: 2023-05-14 11:33:00 +0800
categories: [Python, 01. Introduction]
tags: [python, print function]
# pin: true
math: true
mermaid: true
image:
  path: /assets/images/posts/01-python/01-introduction/introduction.png
  alt: Python Introduction
---

## Syntax


```py
print("Hello World)     # parameter accepts as string

# Error: invalid syntax
# print(Hello World)
```

Every "print" statement start from new line:
```py
# print ends with a new line 
print("Hi")
print("I'm Irfan")
```

For writing statement in one line:
```py
# print ends with blank space
print("How are you?",end ="")      # Blank for no space
print("I am fine", end=',')     # Ending with ,
print("and you?", end='joker')     # you can write anything
print("???", end=' ')     # or even space
print("I also good")
```

Two string in print() separated with comma(,) shows as one space separated statement:
```py
# , == ' '
print("Subscribe Now","and brother do like also")
```

