import { isLshape } from "./L";
import { isSshape } from "./S";
import { isIshape } from "./I";
import { isTshape } from "./T";

export const validateShape = (selection, info, expedition) => {
  let id = expedition.id;
  let valid = false;

  switch (id) {
    case "L":
      // validate L
      const isOKshape = isLshape(selection, info);

      if (isOKshape) {
        console.log("Shape is OK!");
        valid = true;
        break;
      } else {
        // rotate the shape
        const rotate = (m) => m[0].map((x, i) => m.map((x) => x[i]));
        const rotated = rotate(selection);
        const rotatedOK = isLshape(rotated, "(rotated)");

        if (rotatedOK) {
          console.log("Shape is OK!");
          valid = true;
          break;
        }
      }
      break;

    case "S":
      const isOKSshape = isSshape(selection, info);

      if (isOKSshape) {
        console.log("Shape is OK!");
        valid = true;
        break;
      }
      break;

    case "I":
      // validate L
      const isOKishape = isIshape(selection, info);

      if (isOKishape) {
        console.log("Shape is OK!");
        valid = true;
        break;
      }
      break;

    case "T":
      // validate L
      const isOKtshape = isTshape(selection, info);

      if (isOKtshape) {
        console.log("Shape is OK!");
        valid = true;
        break;
      }
      break;
  }

  return valid;
};
