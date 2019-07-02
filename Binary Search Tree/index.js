function Node(key, value) {
    this.key = key;
    this.value = value;

    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype.root = function() {
  return (this._root) ? this._root.value : null;
}

BinarySearchTree.prototype.insert = function(key, value) {
  let node = new Node(key, value);

  if (!this._root) this._root = node;
  else {
    let current = this._root;

    while(current) {
      if (node.key < current.key) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      }
      else if (node.key > current.key) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      }
      else return this;
    }
  }

  return this;
}

BinarySearchTree.prototype.getMin = function(node) {
  while (node.left) node = node.left;

  return node;
}

BinarySearchTree.prototype.getMax = function(node) {
  while (node.right) node = node.right;

  return node;
}

BinarySearchTree.prototype.delete = function(key) {
  let that = this;

  let remove = function (node, key) {
    if (!node) return null;
    else if (node.key > key) {
      node.left = remove(node.left, key);

      return node;
    }
    else if (node.key < key) {
      node.right = remove(node.right, key);

      return node;
    }
    else {
      if (!node.left && !node.right) return null;
      else if (!node.left) return node.right;
      else if (!node.right) return node.left;
      else {
        let temp = that.getMin(node.right);

        node.key = temp.key;
        node.value = temp.value;
        node.right = remove(node.right, temp.key);

        return node;
      }
    }
  }
  this._root = remove(this._root, key);

  return that;
}

BinarySearchTree.prototype.search = function(key) {
  let current = this._root;

	while (current) {
		if (current.key === key) return current.value;
		current = (current.key > key) ? current.left : current.right;
  }
}

BinarySearchTree.prototype.contains = function(value) {
  if (!this._root) return false;

  let queue = [this._root];

  while (queue.length > 0) {
    let node = queue.shift();

    if (node.value == value) return true;
    else {
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return false;
}

BinarySearchTree.prototype.traverse = function(order) {
  console.log(order);

  function leftOrder(node, array) {
    if (node) {
      leftOrder(node.left, array);
      array.push(node.value);
      leftOrder(node.right, array);
    }

    return array;
  }

  function rightOrder(node, array) {
    if (node) {
      rightOrder(node.right, array);
      array.push(node.value);
      rightOrder(node.left, array);
    }

    return array;
  }

  return (order) ? leftOrder(this._root, []) : rightOrder(this._root, []);
}

BinarySearchTree.prototype.verify = function() {
  let queue = [this._root];

  while (queue.length > 0) {
    let node = queue.shift();

    if (node.left) {
      if (node.left.key > node.key) return false;
      queue.push(node.left);
    }
    if (node.right) {
      if (node.right.key < node.key) return false;
      queue.push(node.right);
    }
  }

  return true;
}


module.exports = {
  BinarySearchTree,
  root: '_root',
  left: 'left',
  right: 'right',
  student: 'Nika Neider'
};
