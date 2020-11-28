import tetris from "./shapes/images/tetris.png";
import l from "./shapes/images/l.png";
import bend from "./shapes/images/bend.png";
import dash from "./shapes/images/dash.png";
import longI from "./shapes/images/long-i.png";
import s from "./shapes/images/s.png";

export const EXPEDITIONS = [
  {
    name: "Square",
    id: "S",
    rawShape: s,
    //   [
    //   ["x", "x"],
    //   ["x", "x"],
    // ],
  },
  {
    name: "Uppercase L",
    id: "L",
    rawShape: l,
    //   [
    //   ["x", "x", "x"],
    //   ["x", "", ""],
    // ],
  },
  {
    name: "Tetris",
    id: "T",
    rawShape: tetris,
    //   [
    //   [" ", "x", " "],
    //   ["x", "x", "x"],
    // ],
  },
  {
    name: "Long I",
    id: "I",
    rawShape: longI,
    // [["x", "x", "x"]],
  },
  {
    name: "Long I",
    id: "I",
    rawShape: longI,
    // [["x", "x", "x"]],
  },
  {
    name: "Bend",
    id: "B",
    rawShape: bend,
    //   [
    //   ["x", "x"],
    //   ["x", ""],
    // ],
  },
  {
    name: "Bend",
    id: "B",
    rawShape: bend,
    //   [
    //   ["x", "x"],
    //   ["x", ""],
    // ],
  },
  {
    name: "Dash",
    id: "D",
    rawShape: dash,
    // [["x", "x"]],
  },
];

// To do; add all 47 treasure cards
// To do; add badge values
// To do; add bonus values
export const TREASURES = [
  {
    color: "purple",
    value: 14,
    badge: false,
    grid: [
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    bonus: null,
  },
  {
    color: "purple",
    value: 14,
    badge: false,
    grid: [
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    bonus: null,
  },
  {
    color: "orange",
    value: 12,
    badge: false,
    grid: [
      [0, 0, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 0, 0],
    ],
    bonus: null,
  },
  {
    color: "orange",
    value: 12,
    badge: false,
    grid: [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [1, 1, 0, 0],
    ],
    bonus: null,
  },
  {
    color: "grey",
    value: 8,
    badge: false,
    grid: [
      [1, 1, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 1, 1],
    ],
    bonus: null,
  },
  {
    color: "grey",
    value: 8,
    badge: false,
    grid: [
      [1, 1, 1, 1],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 1, 1, 0],
    ],
    bonus: null,
  },
  {
    color: "green",
    value: 14,
    badge: false,
    grid: [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    bonus: null,
  },
  {
    color: "green",
    value: 10,
    badge: false,
    grid: [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    bonus: null,
  },
  {
    color: "purple",
    value: 14,
    badge: false,
    grid: [
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    bonus: null,
  },
  {
    color: "purple",
    value: 14,
    badge: false,
    grid: [
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    bonus: null,
  },
  {
    color: "orange",
    value: 12,
    badge: false,
    grid: [
      [0, 0, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 0, 0],
    ],
    bonus: null,
  },
  {
    color: "orange",
    value: 12,
    badge: false,
    grid: [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [1, 1, 0, 0],
    ],
    bonus: null,
  },
  {
    color: "grey",
    value: 8,
    badge: false,
    grid: [
      [1, 1, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 1, 1],
    ],
    bonus: null,
  },
  {
    color: "grey",
    value: 8,
    badge: false,
    grid: [
      [1, 1, 1, 1],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 1, 1, 0],
    ],
    bonus: null,
  },
  {
    color: "green",
    value: 14,
    badge: false,
    grid: [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    bonus: null,
  },
  {
    color: "green",
    value: 10,
    badge: false,
    grid: [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    bonus: null,
  },
];
