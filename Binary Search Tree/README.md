####How to use?

1. ```git clone```
2. ```npm i```
3. Export structure and BST class from index.js file

```javascript
module.exports = {
  //BST class
  BinarySearchTree,
  //root name
  root: '_root',
  //left and right nodes
  left: 'left',
  right: 'right',
  student: 'STUDENT NAME'
};
```
After that run  ```npm run test``` and enjoy :white_check_mark:

## Binary search tree
Implement data structure **binary search tree**. It should be done as a **stand-alone**, **clean**, **independent component**, which can be used wherever needed. B.S.T. should have the following methods (you can add your own methods, but the 7 listed below must be and named exactly as stated):
* root     (**no param**)          returns root* of the tree;
* insert   (**param:** key, value) stores specified value in tree using key; method should be chainable**;
* delete   (**param:** key)        removes node from tree by provided key; method should be chainable**;
* search   (**param:** key)        looking for stored data in tree using key;
* contains (**param:** value)      returns whether BST contains such value or not;
* traverse (**param:** order)      retrieves ordered sequence of stored values in given oreder (order is boolean)   
* verify   (**no param**)          verifies whether tree is well-formed binary search tree or not

### Examples:
```js
const bst = new BinarySearchTree();

bst.insert(2, 'two').insert(1, 'one').insert(3, 'three');

//---2----
//1-----3-
//--------

bst.root(); // 'two'

bst.delete(1).delete(3);

 //---2----
//---------
//----------

bst.root(); // 'two'

bst.insert(1, 'one');
bst.insert(3, 'three');

//---2----
//1-----3-
//--------

bst.search(1); // 'one'
bst.contains('three'); // true
bst.traverse(true); // ['one', 'two', 'three']
bst.traverse(false); // ['three', 'two', 'one']

bst._root.key = 0;
bst.verify(); //false

``` 

### Requirements

1. Folder name and branch name shuld be called `binary-search-tree`
2. File with source code shuld be called `bst.js`
3. Don't use ES6 `class` declaration
2. Please use the following template for your BST: 
```js

// WARNING: replace ... with your code
function Node(...) {
    this.key = ...;
    this.value = ...;
    
    //please don't rename left, right, key, value and root properties
    this._left = ...;
    this._right = ...;
}

function BinarySearchTree() {
    this._root = ...;
}

// You can comment this block for testing in the browser but final solution MUST contains this module.exports code
module.exports = {
  //BST class
  BinarySearchTree,
  //root name
  root: '_root',
  //left and right nodes
  left: '_left',
  right: '_right',
  student: 'STUDENT NAME'
};

```

