export const validateShape = (selection, expedition) => {
  let rowRegex = expedition.rowRegex;
  let colRegex = expedition.colRegex;

  // convert 'x's into 1s for validation
  let cleanedSelection = [];
  for (let i = 0; i < selection.length; i++) {
    cleanedSelection[i] = selection[i].map((old) => {
      if (old === "x") {
        return 1;
      } else {
        return 0;
      }
    });
  }

  // Lets a player only select one square instead of the shape
  let skipShapeTurn = cleanedSelection.flatMap((x) => x);
  skipShapeTurn = skipShapeTurn.reduce((acc, curr) => acc + curr);
  if (skipShapeTurn === 1) return true;

  const isOKshape = isShapeValid(cleanedSelection, rowRegex, colRegex);

  if (isOKshape) {
    return true;
  } else {
    let rotated = cleanedSelection;
    for (let i = 0; i < 10; i++) {
      const rotate = (m) => m[0].map((x, i) => m.map((x) => x[i]).reverse());
      rotated = rotate(rotated);
      const rotatedOK = isShapeValid(rotated, rowRegex, colRegex);

      if (rotatedOK) {
        return true;
      }
    }
  }
  return false;
};

const isShapeValid = (selection, rowRegex, colRegex) => {
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

  colSums = colSums.join("");
  rowSums = rowSums.join("");

  return colRegex.test(colSums) && rowRegex.test(rowSums);
};

const add = (acc, curr) => acc + curr;
