import { isLshape } from "./L"

export const validateShape = ((selection, info) => {

  // manually set id to L for now
  let id = "L";

  let valid = false;
  switch(id) {
    case "L":
      // validate L
      const isOKshape = isLshape(selection, info);

      if (isOKshape) {
        valid = true;
        break;
      } else {
        console.log ("Shape is BAD! Rotating.")
        const rotate = m => m[0].map((x,i) => m.map(x => x[i]))
        const rotated = rotate(selection);
        const rotatedOK = isLshape(rotated, '(rotated)');
        if (rotatedOK) {
          console.log ("Shape is OK when rotated!")
          valid = true;
          break;
        } else {
          console.log ("Shape is BAD!")
        }
      }
      break;
    case "S":
      // todo: validate
      valid = true;
      break;
    case "I":
      // todo: validate
      valid = true;
      break;
    default:
      break;
  }

  return valid;
});
