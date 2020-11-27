export const isSshape = (selection, info) => {
  let isS = true;
  const correctRowSums = [0, 0, 2, 2];
  const correctColumnSums = [0, 0, 2, 2];

  const rowSumsAreRight = () => {
    let currentRowSums = [];
    selection.forEach((row) => {
      currentRowSums.push(row.reduce(add));
    });
    const oneBLogic = isFour(currentRowSums);
    // 1a.
    if (JSON.stringify(currentRowSums.sort()) != JSON.stringify(correctRowSums))
      isS = false;

    if (!oneBLogic) isS = false;
  };

  rowSumsAreRight();

  let sum = selection[0].map((num, id) => {
    return num + selection[1][id] + selection[2][id] + selection[3][id];
  });

  // 1c.

  if (JSON.stringify(sum.sort()) != JSON.stringify(correctColumnSums))
    isS = false;

  // 1d.
  const cleanSum = sum.filter((n) => n > 0);

  if (!ordered(cleanSum)) isS = false;

  return isS;
};

const add = (total, num) => total + num;
const isFour = (arr) =>
  arr[0] + arr[1] == 4 || arr[1] + arr[2] == 4 || arr[2] + arr[3] == 4;
const ordered = (arr) => {
  if (arr.length != 2) return false;
  if ((arr[0] = arr[1])) return true;
};
