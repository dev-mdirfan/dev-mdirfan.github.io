---
title: 02. Add Two Numbers
author: irfan
date: 2021-05-01 10:33:00 +0800
categories: [Python Programs, 01. Introduction Programs]
tags: [addition, python]
math: true
mermaid: true
image:
  path: /assets/images/posts/python-programs/01-introduction/02-Add-Two-Numbers.png
  alt: Add Two Numbers Program
---

## Example 1: Add Two Numbers Program

```python
# This program adds two numbers

num1 = 1.5
num2 = 6.3

# Add two numbers
sum = num1 + num2

# Display the sum
print(f'The sum of {num1} and {num2} is {sum}')
```
> **Output:**
The sum of 1.5 and 6.3 is 7.8
{: .prompt-info }

## Example 2: Add Two Numbers Provided by User

```python
# Store input numbers
num1 = input('Enter first number: ')
num2 = input('Enter second number: ')

# Add two numbers
sum = float(num1) + float(num2)

# Display the sum

print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))
```

> **Output:**
> The sum of 1.5 and 6.3 is 7.8
{: .prompt-info }

## Example 3: One Liner Add Two Numbers

```python
print(f'The sum is {float(input("Enter first number: ")) + float(input("Enter second number: "))}')

# or

print('The sum is %.1f'%(float(input('Enter first number: ')) + float(input('Enter second number: ') )))
```

> **Output:**
> The sum is 7.8
{: .prompt-info }

Although this program uses no variable (memory efficient), it is harder to read.
