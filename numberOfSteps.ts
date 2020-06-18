function numberOfSteps(num: number): number {
  let numberOfSteps = 0;
  let moddedNum = num;

  while (moddedNum !== 0) {
    if (moddedNum % 2 === 0) {
      moddedNum /= 2;
    } else {
      moddedNum -= 1;
    }
    numberOfSteps++;
  }
  
  return numberOfSteps;
};