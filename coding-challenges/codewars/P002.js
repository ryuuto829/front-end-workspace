function deleteNth(arr, n) {
  const newArr = arr.reduce((list, item) => {
    list[item] = n;
    return list;
  }, {});

  return arr.filter(el => {

    if (newArr[el]) {
      newArr[el]--;
      return true;
    } else {
      return false;
    }
  });
}


const test = deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);
console.log(test)

// if (item in list) {
//   if (list[item] !== n) {
//     list[item]++;
//   }
// } else {
//   list[item] = 1;
// }