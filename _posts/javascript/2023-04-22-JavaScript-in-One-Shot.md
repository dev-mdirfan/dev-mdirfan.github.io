---
title: JavaScript in One Shot
author: irfan
date: 2023-04-22 09:10:23 +0800
categories: [JavaScript, JavaScript in One Shot]
tag: [javascript]
math: true
---

## 01. History of JavaScript

### History

In 1995, A Netscape *(browser)* programmer named **"Brandan Eich"** developed a scripting language in just 10 days.

**Originally name (first name)**:- `Mocha`

**Second name**:- `LiveScript`

At that time java is famous programming language. So, for marketing purpose LiveScript changed into JavaScript.

```ad-note
Java and Javascript both are different programming language nothing is common.
```

$Mocha -> LiveScript -> JavaScript$

*In 1997*, there is another famous browser that was *Internet Explorer* (Microsoft browser)
Then, Microsoft copied  JavaScript features made own language named as **`Jscript`**.

In browser war (Netscape vs Internet Explorer)

*Netscape:-* JavaScript
*Internet Explorer*:- `Jscript`

EcmaScript is born...

### EcmaScript

Ecma international is an industry association founded in 1996, dedicated to the standardization of information and communication systems.

$ JavaScript + Ecma(Rules) => EcmaScript $

Problem Solved:- We can same implement scripting language for different browser.

**First EcmaScript:**

- ES1 -> 1997
- ES5 -> 2009 (Lots of new features)
- ES6 -> 2015 (Biggest update for JS)
- ES6 is also known as Modern JavaScript

Ecma have a technical community known as *TC39* had decided that after 2015 We release javascript with new features every year (Annual Release).

### Features

- Case Sensitive
- Dynamic typed
- Cross-platform
- Interpreted
- Object-Oriented Scripting Language
- Backward Compatible

## 02. Variables

**Variables:-**

Variables stores the data which can be changed or used when we need.
There are these *Keywords* to declare a variable.

Keywords are the predefined words in programming languages.

**Var:**
```js
var name = 10;
```

**Let:**
```js
let name = 20;
```

**Const:**
```js
const pi = 3.14;
```

## 03. Datatype

There are two types of data.

1. Primitive
2. Non-Primitive

### Primitive Datatype

- Numbers
- Null
- String
- Bool
- Undefined
- Bigint
- Symbol

### Non-Primitive Datatype

- Array
- Object
- RegExp

### String

String are used to store textual form of data like word, sentence. It follows zero based indexing.

```js
let str = "pro";
let str = "pro";
let str = "pro";
```

**String Method:-**

| Methods | Methods |
|---|---|
| trim() | slice() |
| charAt() | tastring() |
| concat() | substring() |
| indexof() | toUpperCase() |
| lastIndexOf() | toLowerCase() |

### Undefined

- Accessing on uninitialized variable returns undefined.

```js
let str;
console.log(str);   //undefined
```

- Accessing a non-existing property of an object returns undefined.
- Accessing a out-of-bounds array element return undefined.

### Null

- null means **'no value'** assign to variable.
- typeof null return 'object'.
- Null is treated as false value.

### Bigint


## 04. JavaScript Hacks

### Convert string to number

Put the pluse(+) before the string.

**For Example:**
```js
let str = "9";
```

### Convert numbers into string

Add a empty string with the number.

**For Example:**

```js
let num = 10;
console.log(typeof(num + ""));
```

## 05. Ternary Operator

## Boolean Data Type

## Truthy and Falsy Values

## Control Flow

## Switch Statement

## For Loop

## While, Do While Loop

## Functions

## Arrays

### Array Methods

## Primitive vs Reference Types

## Spread Operator

## Array Destructing

## Objects Introduction

## Iterate Object

## Object Destructuring

## Arrow Functions

## Hoisting

## Lexical Scope

## Block Scope vs Function Scope

## Default Parameter

## Rest Parameters

## Parameter Destructing

## Call Back Function

## Sets in JavaScript

## Useful Set methods

## Map data Structure

### Methods in Maps

### Create Own Methods

## This Keywords

## Call, Apply, Bind Methods

## Prototype

## New Keywords

```quote
Keep Learning!
    Keep Coding!
Keep Smiling :)
```

How do you feel about Docs. Tell us on comment section.

<center><h2>Thank You</h2></center>
