export const isIshape = (selection, info) => {
  let isI = true;

  console.log({ selection, info });
  let rowSums = [];
  let columns = [[], [], [], []];
  let colSums = [];

  //sums up the rows of the selection
  for (let row of selection) {
    rowSums.push(row.reduce(add));

    //separates out the columns where each array inside 'columns' is a column
    let i = 0;
    for (let col of row) {
      columns[i] = [...columns[i], col];
      i++;
    }
  }

  //sums up the columns of the selection
  for (let col of columns) {
    colSums.push(col.reduce(add));
  }
  console.log(colSums);
  console.log(rowSums);

  // return true if first: one of the col's sums = 3 and consecutive row sums = 3 or second: vice-versa. If not, returns false. Removes need to rotate for this shape
  return (isThree(colSums) && isAlsoThree(rowSums)) ||
    (isThree(rowSums) && isAlsoThree(colSums))
    ? isI
    : (isI = false);
};

const isThree = (arr) =>
  arr[0] + arr[1] + arr[2] === 3 || arr[1] + arr[2] + arr[3] === 3;
const isAlsoThree = (arr) =>
  arr[0] === 3 || arr[1] === 3 || arr[2] === 3 || arr[3] === 3;
const add = (acc, curr) => acc + curr;
