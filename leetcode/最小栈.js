/**
 * initialize your data structure here.
 */


//还是一个思想
//要想速度快，空间换时间！！！


var MinStack = function () {
  this.stack = [];
  this.MinStacks = [Infinity];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.MinStacks.push(Math.min(val, this.MinStacks[this.MinStacks.length - 1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.MinStacks.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.MinStacks[this.MinStacks.length - 1];
};

var obj = new MinStack();
obj.push(8);
obj.push(-231);
obj.push(0);
obj.push(0);
obj.push(-1);
obj.push(20);
console.log(obj);
//obj.pop()
var param_3 = obj.top();
var param_4 = obj.getMin();
console.log(param_3, param_4);
console.log(obj.MinStacks);
