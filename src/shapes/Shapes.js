import { isShapeValid } from "./isShapeValid";

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
