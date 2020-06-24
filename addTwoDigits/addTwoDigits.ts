function addTwoDigits(n: any): number {
  //   const nums = n.toString().split("");

  //   return nums.reduce((a: string, b: string) => parseInt(a) + parseInt(b));

  return Math.floor((n % 10) + n / 10);
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(55));
console.log(addTwoDigits(23));
console.log(addTwoDigits(90));
