class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(name) {
    this.children.push(new Tree(name));
  }

  deleteChild(name) {
    if (this.value === name) {
      this.value = "";
      this.children = [];
    }
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === name) {
        this.children.splice(i, 1);
        return;
      }
    }
  }

  getChild(name) {
    if (this.value === name) {
      return this;
    }
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === name) {
        return this.children[i];
      }
      if (this.children[i].children) {
        this.children[i].getChild(name);
      }
    }
  }
}

export default Tree;
