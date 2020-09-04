const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

const nums = [2, 7, 11, 15, 2];
const target = 9;

console.log(twoSum(nums, target));
