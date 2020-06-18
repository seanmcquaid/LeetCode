function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const ableToHaveGreatest : boolean[] = [];
  let greatestAmount: number = 0;

  for (let i = 0; i < candies.length; i++){
    if (candies[i] > greatestAmount) {
      greatestAmount = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++){
    if (candies[i] + extraCandies >= greatestAmount) {
      ableToHaveGreatest.push(true);
    } else {
      ableToHaveGreatest.push(false);
    }
  }

  return ableToHaveGreatest;
};