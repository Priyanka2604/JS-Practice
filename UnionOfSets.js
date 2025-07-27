var findUnion = function (a, b) {
  let arr = new Set(a);
  console.log(arr);
  for (let i = 0; i < b.length; i++) {
    arr.add(b[i]);
  }
  let res = Array.from(arr);
  res.sort((a, b) => a - b);
  return res;
};

//console.log(findUnion([1, 2, 3, 4, 5], [1, 2, 3]));
console.log(findUnion([-7, 8], [-8, -3, 8]));
