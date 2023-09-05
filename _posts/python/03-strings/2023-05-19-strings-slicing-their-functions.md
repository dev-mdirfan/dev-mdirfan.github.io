---
title: 08. String Slicing and their Fuctions
author: irfan
date: 2022-05-19 11:33:00 +0800
categories: [Python, 02. Strings]
tags: [python, strings]
math: true
mermaid: true
image:
  path: /assets/images/posts/python/strings/strings.png
  alt: string slicing and their functions
---

## String Uses:

- Convert first letter of a word into capital latter
- Convert all letter of a word into Capital letter
- Search a word in a book

## String :

- String is combination of characters
- It is a datatype
- Immutable - It can not change it created
- string index start from 0
- string is sequence of characters. In Python, strings are enclosed inside single quotes, double quotes, or triple quotes.

### String Representation

```python
myStr = "This is a string"
print(myStr)


myStr2 = 'This is a single quote string'
print(myStr2)

myStr3 = '''
        This is a multiline string
        using triple single quotes
        '''
print(myStr3)

myStr4 = """
        This is a multiline string
        using triple double quotes
        """
print(myStr4)
```

### String Indexing

```python
# String Indexing
string[index]
```

- index - index of the string

```python
myStr = "This is a string"
print(myStr[0])
print(myStr[1])
```

### String Concatenation

```python
# String Concatenation
string1 + string2
```

```python
myStr1 = "This is a string"
myStr2 = "This is another string"
print(myStr1 + myStr2)
```

### String Repetition

```python
# String Repetition
string * number
```

```python
myStr = "This is a string"
print(myStr * 3)
```

### String Length

To find length of string use len() function.

```python
# String Length
len(string)
```

```python
myStr = "This is a string"
print(len(myStr))
```

### escape sequence in string

```python
# escape sequence in string
print("This is a \"string\"")
print("This is a \nstring")
print("This is a \tstring")

# output
# This is a "string"
# This is a
# string
# This is a 	string
```

### String Membership

```python
# String Membership
string in string
```

```python
myStr = "This is a string"
print("is" in myStr)
print("is" not in myStr)

# output
# True
# False
```

### String Comparison

```python
# String Comparison
string1 == string2
string1 != string2
string1 > string2
string1 < string2
string1 >= string2
string1 <= string2
```

```python
myStr1 = "This is a string"
myStr2 = "This is another string"
print(myStr1 == myStr2)
print(myStr1 != myStr2)
print(myStr1 > myStr2)
print(myStr1 < myStr2)
print(myStr1 >= myStr2)
print(myStr1 <= myStr2)

# output
# False
# True
# False
# True
# False
# True
```

## String Slicing

String slicing is a way to create a substring by extracting elements from another string. We can use slicing to create a substring from a string.

```python
# String Slicing
string[start:end:step]
```

- start - starting index of the string
- end - ending index of the string
- step - step size of the slicing

### Example

```python
myStr = "This is a string"
print(myStr[0:4])
# myStr[include : Exclude]
print(myStr[5:7])   # : denotes slicing
print(myStr[8:9])
print(myStr[10:16])
print(myStr[0:16:2])
print(myStr[0:16:3])
print(myStr[0:16:4])
print(myStr[0:16:5])
print(myStr[ : 6])       # Default - it take index 0

# output
# This
# is
# a
# string
# Ti sasrn
# Tsas
# Tss
# Tsr
# This i
```

### Negative Indexing

```python
myStr = "This is a string"
print(myStr[-1])
# g
print(myStr[-2])
# n
print(myStr[-3])
# i
print(myStr[-1 : 0])     # Nothing is printed
print(myStr[-1 : ])
# g
print(myStr[-1 : 5])      # Nothing printed
print(myStr[-4 : 0])      # Nothing Printed
print(myStr[0 : 0])       # Nothing Printed
print(myStr[-5 : ])        # (-5 to 15)
# tring
print(myStr[-5 : -2])        # or [11 : 14]
# tri
print(myStr[11 : 14])      # (16-5) : (16-2)
# tri
```

### How to print all string

```python
myStr = "This is a string"
print(myStr)
print(myStr[ : ])
print(myStr[0:16])  # indexing from 0 to 15 but we have to write 1 extra add for all string
print(myStr[0: ])  # Default - it take index length of string (16)
print(myStr[ :16])   # Default - it take index 0
print(myStr[0:16:1])
print(myStr[0 : 78])  #  As possible as resolve

# output
# This is a string
# This is a string
# This is a string
# This is a string
# This is a string
# This is a string
# This is a string
```
> **Note:**
> Default values `myStr[ : : ] = myStr[0 : len(myStr) : 1]`
{: .prompt-info }


#### Wrong Indexing

```python
myStr = "This is a string"
print(myStr[100])

# output
# IndexError: string index out of range
```

#### To skip one character

```python
myStr = "This is a string"
print(myStr[0:16:2])

# output
# Ti sasrn
```

#### To skip two character

```python
myStr = "This is a string"
print(myStr[0:16:3])

# output
# Tsas
```

### Reverse String

```python
myStr = "This is a string"
print(myStr[ : :-1])    # Only Reverse
print(myStr[ : : -2])      # First reverse then skip by 1
print(str1[ : : -300])

# output
# gnirts a si sihT
# gitas sT
# g
```

```python
myStr = "This is a string"
print(myStr[2 : 8 : -1])
print(myStr[ : 11 : -2])
print(myStr[2 : 20 : -3])
print(myStr[2 :  : -1])
print(myStr[5 :  : -2])

# Output
# si sih
# sas s
# sss
# si sihT
# sssas
```


### String Slicing Diagram

![string slicing](/assets/images/posts/python/strings/string-slicing.png)

## String Functions

```python
# String Functions
string.upper()
string.lower()
string.capitalize()
string.title()
string.swapcase()
string.count(substring)
string.find(substring)
string.replace(old, new)
string.split()
string.join(list)
string.strip()
string.lstrip()
string.rstrip()
string.isalnum()
string.isalpha()
string.isdigit()
string.islower()
string.isupper()
string.isspace()
string.startswith(substring)
string.endswith(substring)
string.center(width, fillchar)
string.zfill(width)
string.format()
string.format_map()
string.maketrans(x, y, z)
string.translate(x)
string.encode(encoding='UTF-8',errors='strict')
string.casefold()
string.isdecimal()
string.isidentifier()
string.isnumeric()
string.isprintable()
string.isascii()
string.rjust(width[, fillchar])
string.ljust(width[, fillchar])
string.partition(sep)
string.rpartition(sep)
string.rindex(sub[, start[, end]])
string.rfind(sub[, start[, end]])
string.expandtabs(tabsize=8)
string.splitlines([keepends])
```

### string.upper()

```python
myStr = "This is a string"
print(myStr.upper())

# output
# THIS IS A STRING
```

### string.lower()

```python
myStr = "This is a string"
print(myStr.lower())

# output
# this is a string
```

### string.capitalize()

```python
myStr = "this is a string"
print(myStr.capitalize())

# output
# This is a string
```

### string.title()

```python
myStr = "this is a string"
print(myStr.title())

# output
# This Is A String
```

### string.swapcase()

```python
myStr = "This is a string"
print(myStr.swapcase())

# output
# tHIS IS A STRING
```

### string.count(substring)

```python
myStr = "This is a string"
print(myStr.count("is"))

# output
# 2
```

### string.find(substring)

```python
myStr = "This is a string"
print(myStr.find("is"))

# output
# 2
```

### string.replace(old, new)

```python
myStr = "This is a string"
print(myStr.replace("is", "was"))

# output
# Thwas was a string
```

### string.split()

```python
myStr = "This is a string"
print(myStr.split())

# output
# ['This', 'is', 'a', 'string']
```

### string.join(list)

```python
myStr = "This is a string"
print(" ".join(myStr))

# output
# T h i s   i s   a   s t r i n g
```

### string.strip()

```python
myStr = "This is a string"
print(myStr.strip())

# output
# This is a string
```

### string.lstrip()

```python
myStr = " ... . This is a string. ....."
print(myStr.lstrip(" ."))

# output
# This is a string. .....
```

### string.rstrip()

```python
myStr = " ... . This is a string. ....."
print(myStr.rstrip(" ."))

# output
#  ... . This is a string
```

### string.isalnum()

```python
myStr = "This is a string"
print(myStr.isalnum())  # Because it contains space

# output
# False
```

```python
myStr = "Thisisastring"
print(myStr.isalnum())  # It is alphanumeric

# output
# True
```

```python
myStr = "Thisisastring123"
print(myStr.isalnum())  # It is alphanumeric

# output
# True
```


### string.isalpha()

```python
myStr = "This is a string"
print(myStr.isalpha())

# output
# False
```

```python
myStr = "Thisisastring"
print(myStr.isalpha())

# output
# True
```

```python
myStr = "Thisisastring123"
print(myStr.isalpha())

# output
# False
```

### string.isdigit()

```python
myStr = "This is a string"
print(myStr.isdigit())

# output
# False
```

### string.islower()

```python
myStr = "This is a string"
print(myStr.islower())

# output
# False
```

### string.isupper()

```python
myStr = "This is a string"
print(myStr.isupper())

# output
# False
```

### string.isspace()

```python
myStr = "This is a string"
print(myStr.isspace())

# output
# False
```

### string.startswith(substring)

```python
myStr = "This is a string"
print(myStr.startswith("This"))

# output
# True
```

### string.endswith(substring)

```python
myStr = "This is a string"
print(myStr.endswith("string"))

# output
# True
```

### string.center(width, fillchar)

```python
myStr = "This is a string"
print(myStr.center(30, "*"))

# output
# *******This is a string*******
```

### string.zfill(width)

```python
myStr = "This is a string"
print(myStr.zfill(30))

# output
# 000000000000000This is a string
```

### string.format()

```python
myStr = "This is a string"
print("This is a {}".format(myStr))

# output
# This is a This is a string
```

### string.format_map()

```python
myStr = "This is a string"
print("This is a {0}".format(myStr))

# output
# This is a This is a string
```

### string.maketrans(x, y, z)

```python
myStr = "This is a string"
print(myStr.maketrans("is", "IS", "a"))

# output
# {105: 73, 115: 83, 97: None}
```

### string.translate(x)

```python
myStr = "This is a string"
print(myStr.translate({105: 73, 115: 83, 97: None}))

# output
# ThIS IS  strIng
```

### string.encode(encoding='UTF-8',errors='strict')

```python
myStr = "This is a string"
print(myStr.encode())

# output
# b'This is a string'
```

### string.casefold()

```python
myStr = "This is a string"
print(myStr.casefold())

# output
# this is a string
```

### string.isdecimal()

```python
myStr = "This is a string"
print(myStr.isdecimal())

# output
# False
```

### string.isidentifier()

```python
myStr = "This is a string"
print(myStr.isidentifier())

# output
# False
```

### string.isnumeric()

```python
myStr = "This is a string"
print(myStr.isnumeric())

# output
# False
```

### string.isprintable()

```python
myStr = "This is a string"
print(myStr.isprintable())

# output
# True
```

### string.isascii()

```python
myStr = "This is a string"
print(myStr.isascii())

# output
# True
```

### string.rjust(width[, fillchar])

```python
myStr = "This is a string"
print(myStr.rjust(30, "*"))

# output
# ************This is a string
```

### string.ljust(width[, fillchar])

```python
myStr = "This is a string"
print(myStr.ljust(30, "*"))

# output
# This is a string************
```

### string.partition(sep)

```python
myStr = "This is a string"
print(myStr.partition("is"))

# output
# ('Th', 'is', ' is a string')
```

### string.rpartition(sep)

```python
myStr = "This is a string"
print(myStr.rpartition("is"))

# output
# ('This ', 'is', ' a string')
```

### string.rindex(sub[, start[, end]])

```python
myStr = "This is a string"
print(myStr.rindex("is"))

# output
# 5
```

### string.rfind(sub[, start[, end]])

```python
myStr = "This is a string"
print(myStr.rfind("is"))

# output
# 5
```

### string.expandtabs(tabsize=8)

```python
myStr = "This is a string"
print(myStr.expandtabs(2))

# output
# This is a string
```

### string.splitlines([keepends])

```python
myStr = "This is a string"
print(myStr.splitlines())

# output
# ['This is a string']
```

## String Formatting

```python
# String Formatting
string.format()
```

### Example

```python
myStr = "This is a string"
print("This is a {}".format(myStr))
print("This is a {0}".format(myStr))
print("This is a {0} {1}".format(myStr, "and this is another string"))
print("This is a {0} {1} {2}".format(myStr, "and this is another string", "and this is another string"))        
print("This is a {0} {1} {2} {3}".format(myStr, "and this is another string", "and this is another string", "and this is another string"))

# output
# This is a This is a string
# This is a This is a string
# This is a This is a string and this is another string
# This is a This is a string and this is another string and this is another string
# This is a This is a string and this is another string and this is another string and this is another string
```

## String Formatting with f-strings

```python
# String Formatting with f-strings
f"string {variable}"
```

### Example

```python
myStr = "This is a string"
print(f"This is a {myStr}")
print(f"This is a {myStr} and this is another string")

# output
# This is a This is a string
# This is a This is a string and this is another string
```

## String Formatting with %

```python
# String Formatting with %

# string % (variable)
"%s" % ("string")
# 'string'

# integer % (variable)
"%d" % (123)
# '123'

# float % (variable)
"%f" % (123.456)
# '123.456000'

# octal % (variable)
"%o" % (25)
# '31'

# hexadecimal % (variable)
"%x" % (25)
# '19'

# Exponential % (variable)
"%e" % (123.456)
# '1.234560e+02'

# Exponential % (variable)
"%E" % (123.456)
# '1.234560E+02'

# generic % (variable)
"%g" % (123.456)
# '123.456'

# Generic % (variable)
"%G" % (123.456)
# '123.456'

# character % (variable)
"%c" % (97)
# 'a'

# insert string to the string
"%r" % ("string")
# "'string'"

# insert integer to the string
"%r" % (123)
# '123'

# String % (variable1, variable2)
"%s %s" % ("string1", "string2")
# 'string1 string2'

# integer % (variable1, variable2)
"%d %d" % (123, 456)
# '123 456'
```


