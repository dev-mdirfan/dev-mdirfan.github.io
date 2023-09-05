---
title: 05. Variables
author: irfan
date: 2022-05-16 11:33:00 +0800
categories: [Python, 01. Introduction]
tags: [variables]
math: true
mermaid: true
image:
  path: /assets/images/posts/python/introduction/introduction.png
  alt: Python Introduction
---

# Variables

- Variables are used to store data.
- Variables are like containers.
- Variables are case sensitive.
- Variables are dynamically typed.
- Variables are assigned using `=` operator.
- Variables are assigned using `camelCase` or `snake_case` or `PascalCase` or `UPPERCASE` or `lowercase`.

## Syntax

```python
# variable_name = value
name = "Irfan"
age = 20
```

### Example

```python
name = "Irfan"
age = 20
print(name)
print(age)
```

## Rules

- Variable name can contain `a-z`, `A-Z`, `0-9`, `_`.
- Variable name can't start with number.
- Variable name can't contain special characters like `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `-`, `+`, `=`, `{`, `}`, `[`, `]`, `\`, `|`, `:`, `;`, `"`, `'`, `<`, `>`, `,`, `.`, `?`, `/`.
- Variable name can't be reserved keyword.
- Variable name can't be same as function name.
- Variable name can't be same as class name.
- Variable name can't be same as module name.
- Variable name can't be same as package name.
- Variable name can't be same as method name.
- Variable name can't be same as instance name.
- Variable name can't be same as exception name.

### Example

```python
# Valid Variable Name
name = "Irfan"
age = 20
_name = "Irfan"
_name_ = "Irfan"
name_ = "Irfan"
Name = "Irfan"
NAME = "Irfan"
Name_ = "Irfan"
NAME_ = "Irfan"
_name1 = "Irfan"
_name_1 = "Irfan"
_name1_ = "Irfan"

# Invalid Variable Name
1name = "Irfan"
name@ = "Irfan"
name! = "Irfan"
name# = "Irfan"
name$ = "Irfan"
name% = "Irfan"
name^ = "Irfan"
name& = "Irfan"
name* = "Irfan"
```

## Naming Convention

- Variable name should be meaningful.
- Variable name should be short.
- Variable name should be descriptive.
- Variable name should be readable.
- Variable name should be understandable.

### Example

```python
# Bad Naming Convention
a = "Irfan"
b = 20
print(a)
print(b)

# Good Naming Convention
name = "Irfan"
age = 20
print(name)
print(age)
```

## type() Function

- type() function is used to get type of variable.
- It returns type of the variable

### Syntax

```python
type(variable_name)
```
> <class 'str'>
{: .prompt-info }


### Example

```python
name = "Irfan"
print(type(name))
# <class 'str'>

age = 20
print(type(age))
# <class 'int'>

height = 5.8
print(type(height))
# <class 'float'>
```

## Variable Types

- String
- Integer
- Float
- Boolean
- Complex
- List
- Tuple
- Set
- Dictionary
- None
- Bytes
- Bytearray
- Range
- Frozenset
- Ellipsis
- NotImplemented
- Module
- Class
- Function
- Method

### Example

```python
# String
name = "Irfan"
print(name)

# Integer
age = 20
print(age)

# Float
height = 5.8

# Boolean
is_voter = True

# Complex
complex_number = 2 + 3j

# List
list_of_numbers = [1, 2, 3, 4, 5]

# Tuple
tuple_of_numbers = (1, 2, 3, 4, 5)

# Set
set_of_numbers = {1, 2, 3, 4, 5}

# Dictionary
dictionary_of_numbers = {1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five"}

# None
nothing = None

# Bytes
bytes_of_numbers = b"12345"

# Bytearray
bytearray_of_numbers = bytearray(12345)

# Range
range_of_numbers = range(1, 6)

# Frozenset
frozenset_of_numbers = frozenset({1, 2, 3, 4, 5})

# Ellipsis
ellipsis = ...

# NotImplemented
not_implemented = NotImplemented

# Module
import random
import math

# Class
class Person:
    pass

# Function
def add(a, b):
    return a + b

# Method
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def get_name(self):
        return self.name

    def get_age(self):
        return self.age
```

## Assigning Multiple Variables

- Assigning multiple variables at once.

### Syntax

```python
variable_name1, variable_name2, variable_name3 = value1, value2, value3
```

### Example

```python
name, age, height = "Irfan", 20, 5.8
print(name, age, height)
```

## Assigning Same Value to Multiple Variables

- Assigning same value to multiple variables at once.

### Syntax

```python
variable_name1 = variable_name2 = variable_name3 = value
```

### Example

```python
name = age = height = "Irfan"
print(name, age, height)
```

## Swapping Variables

- Swapping values of two variables.

### Syntax

```python
variable_name1, variable_name2 = variable_name2, variable_name1
```

### Example

```python
age, name = 20, "Irfan"

print("Before Swapping")

print("Age:", age)
print("Name:", name)

age, name = name, age

print("After Swapping")

print("Age:", age)
print("Name:", name)
```


## Addition of variables

- Addition of two variables.

### Syntax

```python
variable_name1 + variable_name2
```

### Example

```python
# Integer Addition
a = 10
b = 20
c = a + b
print(c)
```

```python
# String Addition
a = "Mohd"
b = "Irfan"
c = a + b
print(c)
# MohdIrfan
```

```python
# String and Integer Addition
a = "Mohd"
b = 20
print(a + b)
# Error: TypeError: can only concatenate str (not "int") to str
```
> TypeError: can only concatenate str (not "int") to str
{: .prompt-danger }

```python
# Integer and Float Addition
a = 10
b = 20.5
print(a + b)
# 30.5
```

## Typecasting :

To convert string to integer use int() function
- str()
- int()
- float()
- list()
- dict()
- tuple()


### Example

```python
# String to Integer
a = "10"
b = int(a)
print(b)
# 10

# string + integer
val1 = "54"
val2 = "32"
print(int(val1) + int(val2))
# 86
```

```python
# string + integer
my = "I have "
count = 100 
subscribe = " subscribers"
print(my + str(count) + subscribe)
# I have 100 subscribers
```

