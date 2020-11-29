import { isShapeValid } from "./isShapeValid";

export const validateShape = (selection, expedition) => {
  let rowRegex = expedition.rowRegex;
  let colRegex = expedition.colRegex;

  const isOKshape = isShapeValid(selection, rowRegex, colRegex);

  if (isOKshape) {
    console.log("Shape is OK!");
    return true;
  } else {
    let rotated = selection;
    for (let i = 0; i < 3; i++) {
      const rotate = (m) => m[0].map((x, i) => m.map((x) => x[i]).reverse());
      rotated = rotate(rotated);
      const rotatedOK = isShapeValid(rotated, rowRegex, colRegex);

      if (rotatedOK) {
        console.log("Shape is OK!");
        return true;
      }
    }
  }
  return false;
};
