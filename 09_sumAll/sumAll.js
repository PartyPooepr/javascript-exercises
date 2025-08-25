const sumAll = function(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
  if (start < 0 || end < 0) return "ERROR";
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
  // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
  // if (min > max) [min, max] = [max, min];
  
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
