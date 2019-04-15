function sum() {
  let arr = Array.from(arguments);
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

Function.prototype.myBind = function(ctx, ...bindArgs) {
  return (...callArgs) => {
    this.apply(ctx, bindArgs.concat(callArgs));
  }
}

function curriedSum (numArgs) {
  let numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numArgs === numbers.length) {
      console.log(numbers.reduce((acc, ele) => acc + ele));
    } else {
      return _curriedSum;
    }
  };
}

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let that = this;

  return function _curry() {
    let arr = Array.from(arguments);
    numbers.concat(arr);
    if (numbers.length === numArgs) {
      return that(...numbers);
    } else {
      return _curry;
    }
  }
}

