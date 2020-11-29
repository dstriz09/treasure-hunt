import { isShapeValid } from "./isShapeValid";

export const validateShape = (selection, info, expedition) => {
  let id = expedition.id;
  let valid = false;

  switch (id) {
    case "L":
      const lRowRegex = /(3100)|(0310)|(0031)/g;
      const lsColRegex = /(0112)|(1120)|(2110)|(0211)/g;
      const isOKlshape = isShapeValid(selection, lRowRegex, lsColRegex);

      if (isOKlshape) {
        console.log("Shape is OK!");
        valid = true;
        break;
      } else {
        let rotated = selection;
        for (let i = 0; i < 3; i++) {
          const rotate = (m) =>
            m[0].map((x, i) => m.map((x) => x[i]).reverse());
          rotated = rotate(rotated);
          const rotatedOK = isShapeValid(rotated, lRowRegex, lsColRegex);

          if (rotatedOK) {
            console.log("Shape is OK!");
            valid = true;
            break;
          }
        }
      }
      break;

    case "S":
      const sRowRegex = /(2200)|(0220)|(0022)/g;
      const isColRegex = /(2200)|(0220)|(0022)/g;
      const isOKsshape = isShapeValid(selection, sRowRegex, isColRegex);

      if (isOKsshape) {
        console.log("Shape is OK!");
        valid = true;
        break;
      } else {
        let rotated = selection;
        for (let i = 0; i < 3; i++) {
          const rotate = (m) =>
            m[0].map((x, i) => m.map((x) => x[i]).reverse());
          rotated = rotate(rotated);
          const rotatedOK = isShapeValid(rotated, sRowRegex, isColRegex);

          if (rotatedOK) {
            console.log("Shape is OK!");
            valid = true;
            break;
          }
        }
      }
      break;

    case "I":
      const iRowRegex = /(3000)|(0300)|(0030)|(0003)/g;
      const iColRegex = /(1110)|(0111)/g;
      const isOKishape = isShapeValid(selection, iRowRegex, iColRegex);

      if (isOKishape) {
        console.log("Shape is OK!");
        valid = true;
        break;
      } else {
        let rotated = selection;
        for (let i = 0; i < 3; i++) {
          const rotate = (m) =>
            m[0].map((x, i) => m.map((x) => x[i]).reverse());
          rotated = rotate(rotated);
          const rotatedOK = isShapeValid(rotated, iRowRegex, iColRegex);

          if (rotatedOK) {
            console.log("Shape is OK!");
            valid = true;
            break;
          }
        }
      }
      break;
    case "T":
      const tRowRegex = /(3100)|(0310)|(0031)/g;
      const tColRegex = /(1210)|(0121)/g;
      const isOKtshape = isShapeValid(selection, tRowRegex, tColRegex);

      if (isOKtshape) {
        console.log("Shape is OK!");
        valid = true;
        break;
      } else {
        let rotated = selection;
        for (let i = 0; i < 3; i++) {
          const rotate = (m) =>
            m[0].map((x, i) => m.map((x) => x[i]).reverse());
          rotated = rotate(rotated);
          const rotatedOK = isShapeValid(rotated, tRowRegex, tColRegex);

          if (rotatedOK) {
            console.log("Shape is OK!");
            valid = true;
            break;
          }
        }
      }
      break;
    case "B":
      const bRowRegex = /(1200)|(0120)|(0012)/g;
      const bColRegex = /(2100)|(0210)|(0021)/g;
      const isOKbshape = isShapeValid(selection, bRowRegex, bColRegex);

      if (isOKbshape) {
        console.log("Shape is OK!");
        valid = true;
        break;
      } else {
        // rotate the shape
        let rotated = selection;
        for (let i = 0; i < 3; i++) {
          const rotate = (m) =>
            m[0].map((x, i) => m.map((x) => x[i]).reverse());
          rotated = rotate(rotated);
          const rotatedOK = isShapeValid(rotated, bRowRegex, bColRegex);

          if (rotatedOK) {
            console.log("Shape is OK!");
            valid = true;
            break;
          }
        }
      }
      break;
    case "D":
      const dRowRegex = /(2000)|(0200)|(0020)|(0002)/g;
      const dColRegex = /(1100)|(0110)|(0011)/g;
      const isOKdshape = isShapeValid(selection, dRowRegex, dColRegex);

      if (isOKdshape) {
        console.log("Shape is OK!");
        valid = true;
        break;
      } else {
        // rotate the shape
        let rotated = selection;
        for (let i = 0; i < 3; i++) {
          const rotate = (m) =>
            m[0].map((x, i) => m.map((x) => x[i]).reverse());
          rotated = rotate(rotated);
          const rotatedOK = isShapeValid(rotated, dRowRegex, dColRegex);

          if (rotatedOK) {
            console.log("Shape is OK!");
            valid = true;
            break;
          }
        }
      }
      break;
  }

  return valid;
};
