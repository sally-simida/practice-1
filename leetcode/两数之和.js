/*
//两个方法时间复杂度相同

var twoSum = function (nums, target) {
  var arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        arr.push(i);
        arr.push(j);
        return arr;
      }
    }
  }
}; */
var twoSum = function (nums, target) {
    var index =0
 for (let i = 0; i < nums.length; i++) {
     index = nums.indexOf(target-nums[i])
     if (index!=-1&&index!=i) {
         return [index,i]
     }
 }
  };
console.log(twoSum([2, 7, 1, 1, 15], 9));
