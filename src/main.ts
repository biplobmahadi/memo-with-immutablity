import { List } from "immutable";
import { malePersons } from "./currying";
import { countNumber } from "./recursion";

type Sum = (arr: List<number>) => number;

const memo = (fn: Sum): Sum => {
  let prevArr: List<number>;
  let prevRes: number;
  return (arr) => {
    return arr === prevArr
      ? prevRes
      : ((prevArr = arr), (prevRes = fn.call(this, arr)));
  };
};

const sum: Sum = (arr) => {
  let i = 0;
  while (i < 3423434423) {
    i++;
  }
  return arr.reduce((a, b) => a + b, 0);
};

export const main = () => {
  // const memoSum = memo(sum);
  // let arr = List([2, 3, 4]);
  // const res = memoSum(arr);
  // console.log(res);
  // arr = arr.push(6);
  // const res2 = memoSum(arr);
  // console.log(res2);
  countNumber(10);
  //  makeTree()
  // console.log(res);
};

main();
