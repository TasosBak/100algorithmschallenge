function addBorder(picture: string[]): string[] {
  const wall = "*".repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  return picture.map((item) => "*" + item + "*");
}

console.log(addBorder(["abc", "ded"]));
