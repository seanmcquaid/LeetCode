const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);

  if (mergedArray.length % 2 !== 0) {
    return mergedArray[Math.floor(mergedArray.length / 2)];
  } else {
    return (
      (mergedArray[Math.floor(mergedArray.length / 2)] +
        mergedArray[Math.floor(mergedArray.length / 2 - 1)]) /
      2
    );
  }
};

const nums1 = [1, 2];
const nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));
