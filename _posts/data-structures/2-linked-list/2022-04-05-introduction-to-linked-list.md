---
title: 1. Introduction to Linked List
author: irfan
date: 2021-03-01 10:33:00 +0800
categories: [Data Structures, Linked List]
tags: [linked list, theory]
math: true
mermaid: true
image:
  path: /assets/images/posts/hackerrank/problem-solving/problem-solving.png
  alt: Introduction to Linked List
---

# 1. Introduction to linked list

## What is Linked List

Like arrays, a Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at a contiguous location; the elements are linked using pointers.
They include a series of connected nodes. Here, each node stores the data and the address of the next node.

![Linked List](../images/Linkedlist.png)

### Why Linked List?

Arrays can be used to store linear data of similar types, but arrays have the following limitations:

1. __The size of the arrays is fixed:__ So we must know the upper limit on the number of elements in advance. Also, generally, the allocated memory is equal to the upper limit irrespective of the usage.
2. __Insertion of a new element / Deletion of a existing element in an array of elements is expensive:__ The room has to be created for the new elements and to create room existing elements have to be shifted but in Linked list if we have the head node then we can traverse to any node through it and insert new node at the required position.

__Example:__
In a system, if we maintain a sorted list of IDs in an array id[] = [1000, 1010, 1050, 2000, 2040].
If we want to insert a new ID 1005, then to maintain the sorted order, we have to move all the elements after 1000 (excluding 1000).

Deletion is also expensive with arrays until unless some special techniques are used. For example, to delete 1010 in id[], everything after 1010 has to be moved due to this so much work is being done which affects the efficiency of the code.

### Advantages of Linked Lists over arrays:

1. Dynamic Array.
2. Ease of Insertion/Deletion.

### Drawbacks of Linked Lists:

1. Random access is not allowed. We have to access elements sequentially starting from the first node(head node). So we cannot do a __binary search with linked lists__ efficiently with its default implementation.
2. Extra memory space for a pointer is required with each element of the list.
3. Not cache-friendly. Since array elements are contiguous locations, there is the locality of reference which is not there in the case of linked lists.
4. It takes a lot of time in traversing and changing the pointers.
5. Reverse traversing is not possible in singly linked lists.
6. It will be confusing when we work with pointers.
7. Direct access to an element is not possible in a linked list as in an array by index.
8. Searching for an element is costly and requires O(n) time complexity.
9. Sorting of linked lists is very complex and costly.

### Types of Linked Lists:

1. __Simple Linked List__ – In this type of linked list, one can move or traverse the linked list in only one direction. where the next pointer of each node points to other nodes but the next pointer of the last node points to NULL. It is also called “__Singly Linked List__”.
2. __Doubly Linked List__ – In this type of linked list, one can move or traverse the linked list in both directions (Forward and Backward).
3. __Circular Linked List__ – In this type of linked list, the last node of the linked list contains the link of the first/head node of the linked list in its next pointer.
4. __Doubly Circular Linked List__ – A Doubly Circular linked list or a circular two-way linked list is a more complex type of linked list that contains a pointer to the next as well as the previous node in the sequence. The difference between the doubly linked and circular doubly list is the same as that between a singly linked list and a circular linked list. The circular doubly linked list does not contain null in the previous field of the first node.
5. __Header Linked List__ – A header linked list is a special type of linked list that contains a header node at the beginning of the list. 

### Basic operations on Linked Lists:

1. Deletion
2. Insertion
3. Search
4. Display

### Representation of Singly Linked Lists:

A linked list is represented by a pointer to the first node of the linked list. The first node is called the head of the linked list. If the linked list is empty, then the value of the head points to NULL.

Each node in a list consists of at least two parts:

1. A Data Item (we can store integers, strings, or any type of data).
2. Pointer (Or Reference) to the next node (connects one node to another) or An address of another node.

- In C, we can represent a node using structures. Below is an example of a linked list node with integer data.
- In Java, C# or Python, LinkedList can be represented as a class and a Node as a separate class. The LinkedList class contains a reference of Node class type. 

### Implementation

Python:

```py
# Linked List Representation in Python

class node:
    def __init__(self, data):
        self.data = data # Assigning data
        self.next = None # Initializing next as Null

class LinkedList:
    def __init__(self) -> None:
        self.head = None
```

### Construction of a simple linked list with 3 nodes:

#### Traversal of a Linked List

In the previous program, we created a simple linked list with three nodes. Let us traverse the created list and print the data of each node. For traversal, let us write a general-purpose function printList() that prints any given list.

#### Practice

|Question Name|Platform 1|Platform 2|
|---|---|---|
|Print Linked List Elements|[GFG](https://practice.geeksforgeeks.org/problems/print-linked-list-elements/1)||

```py
# Printing elements of the linked list (Traversal of LL)

class Node:
    def __init__(self, data) -> None:
        self.data = data
        self.next = None
    
class LinkedList:
    def __init__(self) -> None:
        self.head = None
    
    def PrintList(self):
        temp = self.head
        
        while temp != None:
            print(temp.data, end=' ')
            temp = temp.next

if __name__ == '__main__':
    
    List1 = LinkedList()
    
    List1.head = Node(1)
    second = Node(2)
    third = Node(3)
    
    List1.head.next = second
    second.next = third
    
    List1.PrintList()
```

```yml
Output: 1  2  3
```

__Time Complexity:__

|Time Complexity|Worst Case|Average Case|
|---|---|---|
|Search|O(n)|O(n)|
|Insertion|O(1)|O(1)|
|Deletion|O(1)|O(1)|

- Search is O(n) because as data is not stored in contiguous memory locations so we have to traverse one by one.
- Insertion and Deletion are O(1) because we have to just link new nodes for Insertion with the previous and next node and dislink exist nodes for deletion from the previous and next nodes without any traversal.

__Auxiliary Space:__ O(N) [To store dynamic memory]

# 2. Introduction to Linked List

## What is a Linked List?

> A Linked List is a linear data structure which looks like a chain of nodes, where each node is a different element. Unlike Arrays, Linked List elements are not stored at a contiguous location.

It is basically __chains of nodes__, each node contains information such as __data__ and a __pointer to the next node__ in the chain. In the linked list there is a __head pointer__, which points to the first element of the linked list, and if the list is empty then it simply points to null or nothing.

## Why linked list data structure needed?

Here are a few advantages of a linked list that is listed below, it will help you understand why it is necessary to know.

- __Dynamic Data structure:__ The size of memory can be allocated or de-allocated at run time based on the operation insertion or deletion.
- __Ease of Insertion/Deletion:__ The insertion and deletion of elements are simpler than arrays since no elements need to be shifted after insertion and deletion, Just the address needed to be updated.
- __Efficient Memory Utilization:__ As we know Linked List is a dynamic data structure the size increases or decreases as per the requirement so this avoids the wastage of memory. 
- __Implementation:__ Various advanced data structures can be implemented using a linked list like a stack, queue, graph, hash maps, etc.

## Types of linked lists:

There are mainly three types of linked lists:

1. Single linked list
2. Double linked list
3. Circular linked list

### 1. Singly-linked list

Traversal of items can be done in the forward direction only due to the linking of every node to its next node.

![Single Linked List](../images/Singlelinkedlist.png)

#### Representation of Single linked list:

__A Node Creation:__

- Python:

```py
# Creating Node

class Node:
    def __init__(self, data = 0) -> None:
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self) -> None:
        self.head = None
```

__Commonly used operations on Singly Linked List:__

The following operations are performed on a Single Linked List

1. __Insertion:__ The insertion operation can be performed in three ways.
  - Inserting At the Beginning of the list
  - Inserting At End of the list
  - Inserting At Specific location in the list

1. __Deletion:__ The deletion operation can be performed in three ways.
  - Deleting from the Beginning of the list
  - Deleting from the End of the list
  - Deleting a Specific Node

1. __Search:__ It is a process of determining and retrieving a specific node either from the front, the end or anywhere in the list.
2. __Display:__ This process displays the elements of a Single-linked list.

### 2. Doubly linked list

Traversal of items can be done in both forward and backward directions as every node contains an additional prev pointer that points to the previous node.

![Doubly Linked List](../images/Doublylinkedlist.png)

#### Representation of Doubly linked list:

- A Node Creation:

```py
# Doubly Linked List Node Creation

class Node:
    def __init__(self, next=None, prev=None, data=None) -> None:
        self.data = data
        self.prev = prev
        self.next = next
```

#### Commonly used operations on Double-Linked List:

In a double-linked list, we perform the following operations…

1. __Insertion:__ The insertion operation can be performed in three ways as follows:
   - Inserting At the Beginning of the list
   - Inserting after a given node.
   - Inserting at the end.
   - Inserting before a given node

2. __Deletion:__ The deletion operation can be performed in three ways as follows…
   - Deleting from the Beginning of the list
   - Deleting from the End of the list
   - Deleting a Specific Node

3. __Display:__ This process displays the elements of a double-linked list.

### 3. Circular linked lists

A circular linked list is a type of linked list in which the first and the last nodes are also connected to each other to form a circle, there is no NULL at the end. 

![Circular Linked List](../images/Circularlinkedlist.png)

#### Commonly used operations on Circular Linked List:

The following operations are performed on a Circular Linked List

1. __Insertion:__ The insertion operation can be performed in three ways:
   - Insertion in an empty list
   - Insertion at the beginning of the list 
   - Insertion at the end of the list 
   - Insertion in between the nodes 
2. __Deletion:__ The deletion operation can be performed in three ways:
   - Deleting from the Beginning of the list
   - Deleting from the End of the list
   - Deleting a Specific Node
3. __Display:__ This process displays the elements of a Circular linked list.

## Linked List vs. Array

![Linked List vs Array](../images/linked-list-vs-array.png)

### Linked List vs. Array in Time Complexity

|Operation|Linked list|Array|
|---|---|---|
|Random Access|O(N)|O(1)|
|Insertion and deletion at beginning|O(1)|O(N)|
|Insertion and deletion at end|O(N)|O(1)|
|Insertion and deletion at a random position|O(N)|O(N)|

## Advantages of Linked Lists:

- __Dynamic nature:__ Linked lists are used for dynamic memory allocation.
- __Memory efficient:__ Memory consumption of a linked list is efficient as its size can grow or shrink dynamically according to our requirements, which means effective memory utilization hence, no memory wastage.
- __Ease of Insertion and Deletion:__ Insertion and deletion of nodes are easily implemented in a linked list at any position.
- __Implementation:__ For the implementation of stacks and queues and for the representation of trees and graphs.
- The linked list can be expanded in constant time.

## Disadvantages of Linked Lists:

- __Memory usage:__ The use of pointers is more in linked lists hence, complex and requires more memory.
- __Accessing a node:__ Random access is not possible due to dynamic memory allocation.
- __Search operation costly:__ Searching for an element is costly and requires O(n) time complexity.
- __Traversing in reverse order:__ Traversing is more time-consuming and reverse traversing is not possible in singly linked lists. 

## Applications of Linked List: 

Here are some of the applications of a linked list:

- Linear data structures such as stack, queue, and non-linear data structures such as hash maps, and graphs can be implemented using linked lists.
- __Dynamic memory allocation:__ We use a linked list of free blocks.
- __Implementation of graphs__: Adjacency list representation of graphs is the most popular in that it uses linked lists to store adjacent vertices.
- In web browsers and editors, doubly linked lists can be used to build a forwards and backward navigation button.
- A circular doubly linked list can also be used for implementing data structures like Fibonacci heaps.

## Applications of Linked Lists in real world:

- The list of songs in the music player is linked to the previous and next songs. 
- In a web browser, previous and next web page URLs are linked through the previous and next buttons.
- In the image viewer, the previous and next images are linked with the help of the previous and next buttons.
- Switching between two applications is carried out by using “__alt+tab__” in windows and “__cmd+tab__” in mac book. It requires the functionality of a circular linked list.
- In mobile phones, we save the contacts of people. The newly entered contact details will be placed at the correct alphabetical order.
- This can be achieved by a linked list to set contact at the correct alphabetical position.
- The modifications that we made in the documents are actually created as nodes in doubly linked list. We can simply use the undo option by pressing __Ctrl+Z__ to modify the contents. It is done by the functionality of a linked list.

## Frequently asked questions (FAQs) about Linked list:

### 1. What is linked list data structure?

Linked list are most commonly used to handle dynamic data elements. Linked list consists of nodes and a node consists of two fields one for storing data and other for keeping the reference of next node.

### 2. What is linked list example?

A linked list can be assumed as a garland that is made up of flowers. Similarly, a linked list is made up of nodes. Every flower in this particular garland is referred to as a node. In addition, each node points to the next node in this list, and it contains data (in this case, the type of flower).

### 3. Why do we need linked list data structure??

There are some important advantages to using linked lists over other linear data structures. This is unlike arrays, as they are resizable at runtime. Additionally, they can be easily inserted and deleted.

### 4. What are linked lists used for?

The linked list is a linear data structure that stores data in nodes. these nodes hold both the data and a reference to the next node in the list. Linked are very efficient at adding and removing nodes because of their simple structure.
### 5. What is the difference between array and linked list?

There are some following differences between them:

- Arrays are data structures containing similar data elements, whereas linked lists are non-primitive data structures containing unordered linked elements.
- In an array, elements are indexed, but in a linked list nodes are not indexed.
- Accessing an element array is fast if we know the position of an element in the array, while in the Linked list it takes linear time so, the Linked list is quite bit slower.
- Operations like insertion and deletion in arrays take a lot of time. Whereas, the performance of these operations is faster in Linked lists.
- Arrays are of fixed size and their size is static but Linked lists are dynamic and flexible and can expand and shrink their size. 

### 6. Why is a linked list preferred over an array?

Following are the reason that linked lists are preferred over array

- Nodes in a linked array, insertions, and deletions can be done at any point in the list at a constant time.
- Arrays are of fixed size and their size is static but Linked lists are dynamic and flexible and can expand and shrink their size.
- Linked lists provide an efficient way of storing related data and performing basic operations such as insertion, deletion, and updating of information at the cost of extra space required for storing the address.
- Insertion and deletion operations in the linked list are faster as compared to the array. 

### 7. What is the difference between a singly and doubly linked list?

Following are some difference between single and double linked list.

|Singly-linked list (SLL)|Doubly linked list (DLL)|
|---|---|
|SLL nodes contains 2 field data field and next link field.|DLL nodes contains 3 fields data field, a previous link field and a next link field.|
|In SLL, the traversal can be done using the next node link only. Thus traversal is possible in one direction only.|In DLL, the traversal can be done using the previous node link or the next node link. Thus traversal is possible in both directions (forward and backward).|
|The SLL occupies less memory than DLL as it has only 2 fields.|The DLL occupies more memory than SLL as it has 3 fields.|
|The Complexity of insertion and deletion at a given position is O(n).|The Complexity of insertion and deletion at a given position is O(n / 2) = O(n) because traversal can be made from start or from the end.|
|Complexity of deletion with a given node is O(n), because the previous node needs to be known, and traversal takes O(n)|Complexity of deletion with a given node is O(1) because the previous node can be accessed easily|
|A singly linked list consumes less memory as compared to the doubly linked list.|The doubly linked list consumes more memory as compared to the singly linked list.|

### 8. Which is the best array or linked list?

There are some advantages and disadvantages to both arrays and linked lists when it comes to storing linear data of similar types.

__Advantages of linked list over arrays:__

- __Dynamic size:__  Linked lists are dynamic and flexible and can expand and shrink their size
- __Ease of Insertion/Deletion:__ Insertion and deletion operations in linked list are faster as compared to the array

__Disadvantages of linked list over arrays:__

- If the array is sorted we can apply binary search to search any element which takes __O(log(n))__ time. But even if the linked list is sorted we cannot apply binary search and the complexity of searching elements in the linked list is __O(n)__.
- A linked list takes more memory as compared to the array because extra memory space is required for the pointer with each element in the linked list.

### 9. What are the limitations of linked list?

Following are some limitations of the linked list:

- The use of pointers is more in linked lists hence, complex and requires more memory.
- Random access is not possible due to dynamic memory allocation.
- Traversing is more time-consuming and reverse traversing is not possible in singly linked lists.
- Searching for an element is costly and requires O(n) time complexity.

### 10. Why insertion/deletion are faster in a linked list?

If any element is inserted/ deleted from the array, all the other elements after it will be shifted in memory this takes a lot of time whereas manipulation in Linked List is faster because we just need to manipulate the addresses of nodes, so no bit shifting is required in memory, and it will not take that much of time.

## Conclusion

There are many advantages of the linked list compared to array, despite the fact that they solve the similar problem to arrays, we have also discussed the advantage, disadvantages, and its application, and we concluded the fact that we can use a linked list if we need the dynamic size of storage and list are good for adding and removing items quickly or for tasks that require sequence but are not suitable for querying or search elements in a large collection of data.

So, it becomes important that we should always keep in mind the __positive__ and __negative__ aspects of a __data structure__ and how they relate to the problem you are trying to solve.

# 3. Applications, Advantages and Disadvantages of Linked List

A Linked List is a __linear data structure__ that is used to store a collection of data with the help of nodes. A linked list is made up of two items that are data and a reference to the next node. A reference to the next node is given with the help of __pointers__ and __data__ is the value of a node. Each node contains data and links to the other nodes. It is an ordered collection of data elements called a node and the linear order is maintained by pointers. It has an upper hand over the array as the number of nodes i.e. the size of the linked list is not fixed and can grow and shrink as and when required, unlike arrays. Some of the features of the linked list are as follows:

- The consecutive elements are connected by pointers.
- The size of a linked list is not fixed.
- The last node of the linked list points to null.
- Memory is not wasted but extra memory is consumed as it also uses pointers to keep track of the next successive node.
- The entry point of a linked list is known as the head. 

### The various types of linked lists are as follows:

1. __Singly Linked List:__ It is the most basic linked list in which traversal is unidirectional i.e. from the head node to the last node.
2. __Doubly Linked List:__ In this linked list, traversal can be done in both ways, and hence it requires an extra pointer.
3. __Circular Linked List:__ This linked list is unidirectional but in this list, the last node points to the first i.e. the head node and hence it becomes circular in nature.
4. __Circular Doubly Linked List:__ The circular doubly linked list is a combination of the doubly linked list and the circular linked list. It means that this linked list is bidirectional and contains two pointers and the last pointer points to the first pointer.

### Linked Lists are most commonly used for:

- Linked Lists are mostly used because of their effective insertion and deletion. 
- __Insertion__ and __deletion__ in the linked list are very effective and take less __time complexity__ as compared to the __array__ data structure.
- This data structure is simple and can be also used to implement a __stack__, __queues__, and other __abstract data structures__.

### Applications of Linked Lists:

- Linked Lists are used to implement __stacks__ and __queues__.
- It is used for the various representations of __trees__ and __graphs__.
- It is used in __dynamic memory allocation__( linked list of free blocks).
- It is used for representing __sparse matrices__.
- It is used for the manipulation of __polynomials__.
- It is also used for performing arithmetic operations on long integers.
- It is used for finding paths in networks.
- In operating systems, they can be used in Memory management, process scheduling and file system.
- Linked lists can be used to improve the performance of algorithms that need to frequently insert or delete items from large collections of data.
- Implementing algorithms such as the LRU cache, which uses a linked list to keep track of the most recently used items in a cache.

### Applications of Linked Lists in real world: 

- The list of songs in the music player are linked to the previous and next songs. 
- In a web browser, previous and next web page URLs are linked through the previous and next buttons.
- In image viewer, the previous and next images are linked with the help of the previous and next buttons.
- Switching between two applications is carried out by using “alt+tab” in windows and “cmd+tab” in mac book. It requires the functionality of circular linked list.
- In mobile phones, we save the contacts of the people. The newly entered contact details will be placed at the correct alphabetical order. This can be achieved by linked list to set contact at correct alphabetical position.
- The modifications that we make in documents are actually created as nodes in doubly linked list. We can simply use the undo option by pressing Ctrl+Z to modify the contents. It is done by the functionality of linked list.

### Advantages of Linked Lists:

- Insertion and deletion in linked lists are very efficient.
- Linked list can be expanded in constant time.
- For implementation of stacks and queues and for representation of __trees__ and __graphs__.
- Linked lists are used for dynamic memory allocation which means effective memory utilization hence, no memory wastage.
- Linked lists can be used to implement a variety of abstract data structures and algorithms, such as stacks, queues, and symbol tables.

### Disadvantages of Linked Lists:

- Use of pointers is more in linked lists hence, complex and requires more memory.
- Searching an element is costly and requires O(n) time complexity.
- Traversing is more time consuming and reverse traversing is not possible in singly linked lists.
- Random access is not possible due to dynamic memory allocation.
- Linked List are not cache friendly as the elements are not stored contiguously in the memory.
- Linked lists are more complex to implement than arrays.

# 4. Linked List vs Array

__Array:__ _Arrays_ store elements in contiguous memory locations, resulting in easily calculable addresses for the elements stored and this allows faster access to an element at a specific index.

![array](../images/Arrays-1.png)

__Here is the representation of the array in C++:__

```cpp
//c++ program to illustrate arrays in C++

#include <iostream> // header file for taking input and producing output
using namespace std;
 
int main()
{
    int arr[4]= {1,3,5,3};//initializing an array of size 4
 
    cout << arr[3] << " ";//gives the element at index 3
    cout << arr[2] << " ";//gives the element at index 2
 
    return 0;
}
```

```yml
Output: 3 5 
```

__Time Complexity:__ O(1)

__Auxiliary Space:__ O(1)

Explanation: In the above example we have created an array of size 4 and then accessed the elements using __`cout`__ of index 3 and 2.

__Linked List:__ Linked lists are less rigid in their storage structure and elements are usually not stored in contiguous locations, hence they need to be stored with additional tags giving a reference to the next element. 

![Linked List](../images/Linkedlist.png)

```cpp
// Linked list implementation in C++
 
#include <bits/stdc++.h>
#include <iostream>
using namespace std;
 
// Creating a node
class Node {
public:
    int value;
    Node* next;
};
 
int main()
{
    Node* head;
    Node* one = NULL;
    Node* two = NULL;
    Node* three = NULL;
 
    // allocate 3 nodes in the heap
    one = new Node();
    two = new Node();
    three = new Node();
 
    // Assign value values
    one->value = 1;
    two->value = 2;
    three->value = 3;
 
    // Connect nodes
    one->next = two;
    two->next = three;
    three->next = NULL;
 
    // print the linked list value
    head = one;
    while (head != NULL) {
        cout << head->value;
        head = head->next;
    }
}
```

```yml
Output: 123
```

__Time Complexity:__ O(1)

__Auxiliary Space:__ O(1)

Explanation: All the struct nodes has a data item and it contains a pointer to the next __`struct node`__. It took us only a few steps to create a linked list of three nodes(one, two and three). At first we allocated the nodes and then we assigned values to the node. After assigning the value we connected the nodes from one to next and at the end using while loop printed the entire linked list.

## Major differences between array and linked-list are listed below: 

- __Size:__ Since data can only be stored in contiguous blocks of memory in an array, its size cannot be altered at runtime due to the risk of overwriting other data.However, in a linked list, each node points to the next one such that data can exist at scattered (non-contiguous) addresses; this allows for a dynamic size that can change at runtime.
- __Memory allocation:__ For arrays at compile time and at runtime for linked lists. but, a dynamically allocated array also allocates memory at runtime.
- __Memory efficiency:__ For the same number of elements, linked lists use more memory as a reference to the next node is also stored along with the data. However, size flexibility in linked lists may make them use less memory overall; this is useful when there is uncertainty about size or there are large variations in the size of data elements; Memory equivalent to the upper limit on the size has to be allocated (even if not all of it is being used) while using arrays, whereas linked lists can increase their sizes step-by-step proportionately to the amount of data.
- __Execution time:__ Any element in an array can be directly accessed with its index. However, in the case of a linked list, all the previous elements must be traversed to reach any element. Also, better cache locality in arrays (due to contiguous memory allocation) can significantly improve performance. As a result, some operations (such as modifying a certain element) are faster in arrays, while others (such as inserting/deleting an element in the data) are faster in linked lists.
- __Insertion:__ In an array, insertion operation takes more time but in a linked list these operations are fast. For example, if we want to insert an element in the array at the end position in the array and the array is full then we copy the array into another array and then we can add an element whereas if the linked list is full then we find the last node and make it next to the new node 
- __Dependency:__ In an array, values are independent of each other but 

In the case of linked list nodes are dependent on each other. one node is dependent on its previous node. If the previous node is lost then we can’t find its next subsequent nodes.

![Linked List vs Arrays](../images/linked-list-vs-array.png)

### Advantages of Linked Lists:

- The size of the arrays is fixed: So we must know the upper limit on the number of elements in advance. Also, generally, the allocated memory is equal to the upper limit irrespective of usage, and in practical uses, the upper limit is rarely reached. 
- Inserting a new element in an array of elements is expensive because a room has to be created for the new elements and to create a room existing elements have to be shifted.

__Example:__

suppose we maintain a sorted list of IDs in an array 

```cpp
id[ ] = [1000, 1010, 1050, 2000, 2040, …..]. 
```
And if we want to insert a new ID 1005, then to maintain the sorted order, we have to move all the elements after 1000 (excluding 1000). 

Deletion is also expensive with arrays unless some special techniques are used. For example, to delete 1010 in `id[]`, everything after 1010 has to be moved.

__So Linked list provides the following two advantages over arrays:__

1. Dynamic size 
2. Ease of insertion/deletion 

### Disadvantages of Linked Lists:

- Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do a binary search with linked lists. 
- Extra memory space for a pointer is required for each element of the list. 
- Arrays have a better cache locality that can make a pretty big difference in performance.
- It takes a lot of time in traversing and changing the pointers.
- It will be confusing when we work with pointers.

### Advantages of Arrays:

- Arrays store multiple data of similar types with the same name.
- It allows random access to elements.
- As the array is of fixed size and stored in contiguous memory locations there is no memory shortage or overflow.
- It is helpful to store any type of data with a fixed size.
- Since the elements in the array are stored at contiguous memory locations it is easy to iterate in this data structure and unit time is required to access an element if the index is known.


### Disadvantages of Arrays:

- The array is static in nature. Once the size of the array is declared then we can’t modify it.
- Insertion and deletion operations are difficult in an array as elements are stored in contiguous memory locations and the shifting operations are costly.
- The number of elements that have to be stored in an array should be known in advance.
- Wastage of memory is the main problem in the array. If the array size is big the less allocation of memory leads to wastage of memory.

Please write comments if you find anything incorrect, or if you want to share more information about the topic discussed above.
