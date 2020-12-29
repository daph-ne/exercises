Tree:
    * Undirected graph
    * Acyclic connected graph
    * N nodes and N-1 edges

Root node:
    Topmost node of the tree.

Parent node:

Child node:
    Extends form parent node.

Leaf node:
    Node with no children.

Sub Tree:
    Consists of a single node.
    When opened, it has a tree in it.

Binary Tree:
    It has at most two children.

Binary Search Tree:
    Left subtree has smaller elements.
    Right subtree has larger elements.

Uses of Binary Tree:

    Red Black Tree
         a red–black tree is a kind of self-balancing binary search tree. 
         Each node stores an extra bit representing color, used to ensure that the tree remains approximately balanced during insertions and deletions.
    AVL tree 
        A binary search tree in which the difference of heights of left and right subtrees of any node is less than or equal to one. 
    Splay Tree
        A splay tree is a binary search tree with the additional property that recently accessed elements are quick to access again. 
    Implementation of binary heap
        Heaps are the data structure you want to use when you want to be able to access the maximum or minimum element very quickly.
        Represented as an array. 
        The root element will be at Arr[0].
        Arr[(i-1)/2] 	Returns the parent node
        Arr[(2*i)+1] 	Returns the left child node
        Arr[(2*i)+2] 	Returns the right child node

Min Heap:
    A Min-Heap is a complete binary tree in which the value in each internal node is smaller than or equal to the values in the children of that node.

