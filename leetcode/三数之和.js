var threeSum = function (nums) {
    //判断极端数组不够时
  if (nums.length < 3) {
    return [];
  } else {
    let res = [];

    //数组由小到大排序
    nums.sort((a, b) => a - b);

    //再次判断极端条件，若数组最小值大于0 最大值小于 0 ，不可能会相加为0
    if (nums[0] <= 0 && nums[nums.length - 1] >= 0) {
      let i = 0;
      let last = 0
      let first = 0
      while (i < nums.length) {
          last = nums.length-1;
          first = i + 1;
          //两个指针向中间靠近
        while (first < last) {
          if (nums[i] + nums[first] + nums[last] === 0) {
            res.push([nums[i], nums[first], nums[last]]);
          }
          //此处判定条件一定为 >= ！！！！！
          //否则程序在找到符合条件的值时就死在 push上！！！！
           if (nums[i] + nums[first] + nums[last] >= 0) {
            while (nums[last] == nums[--last]) {
            }
          } else {
            while (nums[first] == nums[++first]) {
            }
          }
        }
        while (nums[i] === nums[++i]) {}
      }
      console.log(res);
    }
    return res;
  }
};

console.log(
    
    threeSum([1,1,1])
);
