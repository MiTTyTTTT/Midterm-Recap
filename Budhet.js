function getBudgets(arr) {
    return arr
      .map(obj => Object.values(obj)[2])
      .reduce((acc, curr) => acc + curr);
  }

