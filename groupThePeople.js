function groupThePeople(groupSizes) {
  let groupSizeIndexes = {};

  for (let i = 0; i < groupSizes.length; i++) {
    groupSizeIndexes[groupSizes[i]] = groupSizeIndexes[groupSizes[i]]
      ? [...groupSizeIndexes[groupSizes[i]], i]
      : [i];
  }

  for (let key in groupSizeIndexes) {
    console.log(Number(key));
    console.log(groupSizes.indexOf(Number(key)));
  }

  console.log(groupSizeIndexes);
}

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
