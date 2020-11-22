// Determines if the current selection matches the expedition card's shape
export const isLshape = ((selection, info) => {
  let isL = true;
  const correctRowSums = [0,0,1,3];
  const correctColumnSums = [0,1,1,2];

  // Check row sums (1a + 1b)
  const rowSumsAreRight = () => {
    let currentRowSums = []; 
    selection.forEach(row => {
      currentRowSums.push(row.reduce(add));
    })
    // 1a.
    console.log(info + " sums OK? ", JSON.stringify(currentRowSums.sort()) == JSON.stringify((correctRowSums)));
    if (JSON.stringify(currentRowSums.sort()) != JSON.stringify((correctRowSums))) isL = false;

    // 1b.
    console.log(info + " sums in good order? ", isFour(currentRowSums))
    if (!isFour(currentRowSums)) isL = false;
  }
  rowSumsAreRight()

  // Check column sums (1c & 1d)
  let sum = selection[0].map((num, id) => {
    return num + selection[1][id] + selection[2][id] + selection[3][id];
  })

  // 1c.
  console.log(info + " cols OK? ", JSON.stringify(sum.sort()) == JSON.stringify((correctColumnSums)));
  if (JSON.stringify(sum.sort()) != JSON.stringify((correctColumnSums))) isL = false;

  // 1d.
  const cleanSum = sum.filter(n => n > 0)
  console.log(info + " col in good order? ",ordered(cleanSum));
  if (!ordered(cleanSum)) isL = false

  return isL;
});

// Helper functions
const add = (total, num) => total + num;
const isFour = (arr) => arr[0] + arr[1] == 4 || arr[1] + arr[2] == 4 || arr[2] + arr[3] == 4;
const ordered = (arr) => {
  if (arr.length != 3) return false;
  if (arr[0] <= arr[1] <= arr[2] || arr[0] >= arr[1] >= arr[2]) return true;
}
