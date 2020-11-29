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
    rowRegex: /(2200)|(0220)|(0022)/g,
    colRegex: /(2200)|(0220)|(0022)/g,
  },
  {
    name: "Uppercase L",
    id: "L",
    rawShape: l,
    rowRegex: /(3100)|(0310)|(0031)/g,
    colRegex: /(0112)|(1120)|(2110)|(0211)/g,
  },
  {
    name: "Tetris",
    id: "T",
    rawShape: tetris,
    rowRegex: /(3100)|(0310)|(0031)/g,
    colRegex: /(1210)|(0121)/g,
  },
  {
    name: "Long I",
    id: "I",
    rawShape: longI,
    rowRegex: /(3000)|(0300)|(0030)|(0003)/g,
    colRegex: /(1110)|(0111)/g,
  },
  {
    name: "Long I",
    id: "I",
    rawShape: longI,
    rowRegex: /(3000)|(0300)|(0030)|(0003)/g,
    colRegex: /(1110)|(0111)/g,
  },
  {
    name: "Bend",
    id: "B",
    rawShape: bend,
    rowRegex: /(1200)|(0120)|(0012)/g,
    colRegex: /(2100)|(0210)|(0021)/g,
  },
  {
    name: "Bend",
    id: "B",
    rawShape: bend,
    rowRegex: /(1200)|(0120)|(0012)/g,
    colRegex: /(2100)|(0210)|(0021)/g,
  },
  {
    name: "Dash",
    id: "D",
    rawShape: dash,
    rowRegex: /(2000)|(0200)|(0020)|(0002)/g,
    colRegex: /(1100)|(0110)|(0011)/g,
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
