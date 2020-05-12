function removeEveryOther(arr) {
  let test = false;
  const news = arr.filter(() => {
    if (test) {
      test = false
      return test;
    } else {
      test = true;
      return test;
    }
  }

  );
  console.log(news);
}