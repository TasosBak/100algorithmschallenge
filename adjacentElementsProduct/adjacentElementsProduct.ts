function adjacentElementsProduct(inputArray: number[]): number {
  let products: number[] = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    products[i] = inputArray[i] * inputArray[i + 1];
  }

  return Math.max(...products);
}

function adjacentElementsProduct2(inputArray: number[]): number {
  let products: number[] = [];

  let largestProduct = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    products[i] = inputArray[i] * inputArray[i + 1];
    largestProduct =
      largestProduct > products[i] ? largestProduct : products[i];
  }

  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct2([3, 6, -2, -5, 7, 3]));
