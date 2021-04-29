function isEven(n) {
    n = any /*number*/;
    return n === 0 || !!(n && !(n%2));
  }
  
  function isOdd(n) {
    return isEven(Number(n) + 1);
  }