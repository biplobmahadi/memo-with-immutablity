export const countNumber: any = (num: number) => {
  if (num == 0) return;
  return countNumber(num - 1);
};

const data = [
  { species: "animal", parent: null },
  { species: "mammal", parent: "animal" },
  { species: "kammal", parent: "animal" },
  { species: "dog", parent: "mammal" },
  { species: "cat", parent: "kammal" },
  { species: "leo", parent: "dog" },
  { species: "meo", parent: "cat" },
  { species: "neo", parent: "cat" },
  { species: "don", parent: "dog" },
];

export const makeTree = (data: any[], parent: any) => {
  const tree: any = {};
  data
    .filter((e) => e.parent === parent)
    .forEach((e) => (tree[e.species] = makeTree(data, e.species)));
  return tree;
};

console.log(makeTree(data, null));

// Reason why need recursion over loop
// using loop this behaviour can't be achieved for multi level
