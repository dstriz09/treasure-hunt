// 0 = unselectable
// 1 = selectable
// 2 = coin
// 3 = x
// 4 = tree

const grey = "150, 150, 150";
const green = "55, 161, 28, 63";
const orange = "245, 147, 49, 96";
const purple = "178, 121, 224, 88";

export const TREASURES = [
  {
    color: grey,
    points: 8,
    bonus: false,
    bonusColor: "",
    grid: [
      [0, 0, 0, 0],
      [3, 1, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 1, 2],
    ],
  },
  {
    color: grey,
    points: 8,
    bonus: 1,
    bonusColor: green,
    grid: [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 0, 1, 0],
      [1, 1, 1, 0],
    ],
  },
  {
    color: green,
    points: 10,
    bonus: false,
    bonusColor: "",
    grid: [
      [0, 0, 0, 0],
      [0, 2, 1, 1],
      [1, 1, 1, 3],
      [3, 1, 1, 0],
    ],
  },
  {
    color: green,
    points: 10,
    bonus: false,
    bonusColor: "",
    grid: [
      [0, 0, 0, 0],
      [4, 0, 0, 3],
      [1, 1, 1, 3],
      [1, 1, 2, 1],
    ],
  },
  {
    color: orange,
    points: 12,
    bonus: 1,
    bonusColor: grey,
    grid: [
      [1, 1, 0, 1],
      [1, 2, 0, 2],
      [1, 1, 1, 1],
      [0, 0, 1, 1],
    ],
  },
  {
    color: orange,
    points: 12,
    bonus: 1,
    bonusColor: grey,
    grid: [
      [1, 0, 0, 1],
      [1, 4, 1, 1],
      [1, 1, 1, 1],
      [3, 0, 0, 2],
    ],
  },
  {
    color: purple,
    points: 14,
    bonus: false,
    bonusColor: "",
    grid: [
      [0, 0, 1, 3],
      [1, 1, 2, 1],
      [1, 3, 1, 1],
      [1, 1, 1, 2],
    ],
  },
  {
    color: purple,
    points: 14,
    bonus: 2,
    bonusColor: orange,
    grid: [
      [3, 1, 1, 1],
      [0, 1, 1, 0],
      [3, 1, 1, 3],
      [1, 1, 1, 1],
    ],
  },
];
