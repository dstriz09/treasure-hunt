export const isTshape = (selection, info) => {
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

  console.log({ rowSums });
  console.log({ colSums });
};

const add = (acc, curr) => acc + curr;
