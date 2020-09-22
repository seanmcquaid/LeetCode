function groupThePeople(groupSizes) {
  let groupSizeIndexes = {};
  let results = [];

  for (let i = 0; i < groupSizes.length; i++) {
    groupSizeIndexes[groupSizes[i]] = groupSizeIndexes[groupSizes[i]]
      ? [...groupSizeIndexes[groupSizes[i]], i]
      : [i];
  }

  for (let key in groupSizeIndexes) {
    const amountOfGroups = groupSizeIndexes[key].length / Number(key);
    for (let i = 0; i < amountOfGroups; i++) {
      results.push(groupSizeIndexes[key].splice(0, Number(key)));
    }
  }

  return results;
}

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
