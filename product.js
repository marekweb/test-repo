function product(input) {
  let product = 1;

  for (let i = 0; i < input.length; i++) {
    product *= input[i];
  }

  return product;
}

module.exports = product;
