function findDuplicates(nums: number[]): number[] {
  interface counterObj {
      [key: string]: number
  };

  let counter: counterObj = {};
  const duplicates: number[] = [];

  for (let i: number = 0; i < nums.length; i++){
    counter[nums[i]] = counter[nums[i]] ? counter[nums[i]] + 1 : 1;
  }

  for (let key in counter) {
    if (counter[key] > 1) {
      duplicates.push(Number.parseInt(key));
    }
  }

  return duplicates;
};