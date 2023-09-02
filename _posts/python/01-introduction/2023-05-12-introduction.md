---
title: 01. Introduction to Python
author: irfan
date: 2023-05-12 11:33:00 +0800
categories: [Python, 01. Introduction]
tags: [python]
# pin: true
math: true
mermaid: true
image:
  path: /assets/images/posts/python/introduction/introduction.png
  alt: Python Introduction
---

## Introduction

- Python is interpreted language.
- Statements ae executed line by line.
- Source code is stored in `.py` file extension.

History:
: 
|Python 1|Python 2|Python 3|
|---|---|---|
|20 Feb 1991|16 Oct 2000|03 Dec 2008|

From python we can make:
: 
- Games: Flappy, Snake using PyGame.
- Backend website using django/ flask.
- GUI (Graphical User Interface).
- Data Science.
- Data Analysis.

Example:
: 
- Instagram
- Facebook
- Youtube
- Intel
- IBM
- NASA
- JPMorgan

### Developer:

***Guido Van Rossum***


> Name Script Taken From: **"Monty Python's Flying Circus"** from a BBC Comedy series.
{: .prompt-info }

## Commands

Run Python File:
: 
```bash
python filename.py
```

Install External Module:
: 
```bash
pip install module_name
```

### REPL:

REPL stands for Run Evaluate Print Loop by writing `python`.

```py
# importing built-in modules gives no error
import random
import math

# External module need to be install
import flask
import pandas
# Getting Error: (Not Found)

exit()
```

> **Note:** `pip` stands for *Preferred Installer Program* which is a package manager of python.
{: .prompt-info }

> **Some Tips:**
> - Don't use module name as "Python file" name like flask, pandas etc.
> - You can use multiple interpreter like python 3.9, 3.8, 3.7 e.t. simultaneously in Pycharm
> - Module:
>   - Built in Module - already in python
>   - External Module - download from internet
{: .prompt-tip}

```py
# Addition
>>> 20+56+25

# Multiplication
>>> 56*10

# Expression
>>> 10*4 + 3*4 + 34*2

# True Division
>>> 32/8      # Float value

# Integer Division
>>> 32//8     # Int value
```



