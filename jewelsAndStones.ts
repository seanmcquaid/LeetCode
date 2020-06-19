function numJewelsInStones(J: string, S: string): number {
  const jewels = J.split("");
  const stones = S.split("");

  interface Counter {
    [key : string] : number,
  }

  let stonesCounter: Counter = {};
  let jewelsInStonesCount = 0;
  
  for (let i = 0; i < stones.length; i++){
    stonesCounter[stones[i]] = stonesCounter[stones[i]] ? stonesCounter[stones[i]] + 1 : 1;
  }

  for (let i = 0; i < jewels.length; i++){
    const jewel = jewels[i];
    if (stonesCounter[jewel]) {
      jewelsInStonesCount += stonesCounter[jewel];
    }
  }
  
  return jewelsInStonesCount;
};