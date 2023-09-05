---
title: 138. Copy List with Random Pointer
author: irfan
date: 2022-05-12 11:33:00 +0800
categories: [Python, 01. Introduction]
tags: [python, introduction, history, features, applications, companies, how python works, installation, commands, repl]
math: true
mermaid: true
image:
  path: /assets/images/posts/leetcode/linked-list/138.png
  alt: copy list with random pointer
---

## Go to the Problem

[138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)

## Solution

### Approach 1: Recursive with O(N) Space

In this approach, we take advantage of the fact that we already have a hash map containing mappings from old list nodes to new list nodes. We make use of this hashmap to avoid using recursion during the second step.

```python
class Solution:
    def __init__(self):
        self.visited = {}
    def copyRandomList(self, head: 'Node') -> 'Node':
        if not head:
            return None
        if head in self.visited:
            return self.visited[head]
        node = Node(head.val, None, None)
        self.visited[head] = node
        node.next = self.copyRandomList(head.next)
        node.random = self.copyRandomList(head.random)
        return node
```

### Approach 2: Iterative with O(N) Space

In this approach, we don't use any additional space for copying the linked list. Instead, we tweak the original linked list and make copies of the nodes on the original linked list itself.

```python
class Solution:
    def __init__(self):
        self.visited = {}
    def getClonedNode(self, node):
        if node:
            if node in self.visited:
                return self.visited[node]
            else:
                self.visited[node] = Node(node.val, None, None)
                return self.visited[node]
        return None
    def copyRandomList(self, head: 'Node') -> 'Node':
        if not head:
            return None
        old_node = head
        new_node = Node(old_node.val, None, None)
        self.visited[old_node] = new_node
        while old_node:
            new_node.random = self.getClonedNode(old_node.random)
            new_node.next = self.getClonedNode(old_node.next)
            old_node = old_node.next
            new_node = new_node.next
        return self.visited[head]
```

other solution

```python
class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        temp = head
        mp = dict()
        ans = Node(0)
        ans2 = ans
        while temp != None:
            new = Node(temp.val)
            ans.next = new
            ans = ans.next
            mp[temp] = ans
            temp = temp.next
        # return ans2.next
        temp = head
        ans = ans2.next
        while temp != None:
            if temp.random != None:
                ans.random = mp[temp.random]
            else:
                ans.random = None
            ans = ans.next
            temp = temp.next
        return ans2.next
```

### Approach 3: Iterative with O(1) Space

The algorithm is composed of the follow three steps which are also 3 iteration rounds.

```python
class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        if not head:
            return None
        # create a copy of each node and insert it after the original node
        curr = head
        while curr:
            new_node = Node(curr.val, None, None)
            new_node.next = curr.next
            curr.next = new_node
            curr = new_node.next
        # copy random pointers for each new node
        curr = head
        while curr:
            curr.next.random = curr.random.next if curr.random else None
            curr = curr.next.next
        # separate the original list from the copy list
        old_list = head
        new_list = head.next
        new_head = head.next
        while old_list:
            old_list.next = old_list.next.next
            new_list.next = new_list.next.next if new_list.next else None
            old_list = old_list.next
            new_list = new_list.next
        return new_head
```

