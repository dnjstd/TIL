let arr = [
  { gender: "male", name: "a" },
  { gender: "female", name: "b" },
  { gender: "male", name: "c" },
];

let filtered = arr.filter(function (item) {
  if (item.gender === "female") {
    return item;
  }
});
console.log(filtered);
