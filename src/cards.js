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
    squares: 4,
  },
  {
    name: "Uppercase L",
    id: "L",
    rawShape: l,
    squares: 4,
  },
  {
    name: "Tetris",
    id: "T",
    rawShape: tetris,
    squares: 4,
  },
  {
    name: "Long I",
    id: "I",
    rawShape: longI,
    squares: 3,
  },
  {
    name: "Long I",
    id: "I",
    rawShape: longI,
    squares: 3,
  },
  {
    name: "Bend",
    id: "B",
    rawShape: bend,
    squares: 3,
  },
  {
    name: "Bend",
    id: "B",
    rawShape: bend,
    squares: 3,
  },
  {
    name: "Dash",
    id: "D",
    rawShape: dash,
    squares: 2,
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
