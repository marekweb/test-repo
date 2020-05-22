function sum(input) {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }

  return sum;
}

module.exports = sum;
