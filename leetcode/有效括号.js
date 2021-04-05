var isValid = function (s) {
  var arr = [];
  if (s.length % 2 != 0) {
    return false;
  } else {
    for (let element of s) {
      switch (element) {
        case "(":
        case "[":
        case "{":
          arr.push(element);
          break;
        case ")":
          if (arr.pop() !== "(") {
            return false;
          }
          break;
        case "]":
          if (arr.pop() !== "[") {
            return false;
          }
          break;
        case "}":
          if (arr.pop() !== "{") {
            return false;
          }
          break;
      }
    }
    return !arr.length;
  }
};
//isValid("()")
console.log(isValid("()"));
/* 

这个方法相对更快一些

var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  const map = { "}": "{", "]": "[", ")": "(" };
  for (var t of s) {
    if (t === "(" || t === "{" || t === "[") {
      stack.push(t);
    } else {
      // stack.length === 0 说明字符串是以右括号开始的，直接返回false
      if (stack.length === 0 || stack.pop() !== map[t]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
 */