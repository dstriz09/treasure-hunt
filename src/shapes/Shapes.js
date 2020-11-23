import { isLshape } from "./L"

export const validateShape = ((selection, info, expedition) => {
  let id = expedition.id
  let valid = false;

  switch(id) {
    case "L":
      // validate L
      const isOKshape = isLshape(selection, info);

      if (isOKshape) {
        console.log("Shape is OK!");
        valid = true;
        break;

      } else {
        // rotate the shape
        const rotate = m => m[0].map((x,i) => m.map(x => x[i]))
        const rotated = rotate(selection);
        const rotatedOK = isLshape(rotated, '(rotated)');

        if (rotatedOK) {
          console.log("Shape is OK!");
          valid = true;
          break;
        }
      }
      break;

    case "S":
      console.log("no validation for this shape yet")
      valid = true;
      break;

    case "I":
      // todo: validate
      console.log("no validation for this shape yet")
      valid = true;
      break;

    default:
      valid = true;
      break;
  }

  return valid;
});
