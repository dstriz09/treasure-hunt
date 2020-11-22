// To do; add all eight expedition cards
export const EXPEDITIONS = [
  {
    name: "Uppercase L",
    id: "L",
    validate: null,
    rawShape: [
      ["x","x","x"],
      ["x","",""]
    ]
  },
  {
    name: "Long I",
    id: "I",
    validate: null,
    rawShape: [
      ["x","x","x"]
    ]
  },
  {
    name: "Square",
    id: "S",
    validate: null,
    rawShape: [
      ["x","x"],
      ["x","x"]
    ]
  },
]

// To do; add all 47 treasure cards
// To do; add badge values
// To do; add bonus values
export const TREASURES = [
  {
    color: 'purple',
    value: 14,
    badge: false,
    grid: [
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    bonus: null
  },
  {
    color: 'orange',
    value: 12,
    badge: false,
    grid: [
      [0, 0, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 0, 0],
    ],
    bonus: null
  },
  {
    color: 'grey',
    value: 8,
    badge: false,
    grid: [
      [1, 1, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 1, 1],
    ],
    bonus: null
  },
  {
    color: 'green',
    value: 14,
    badge: false,
    grid: [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    bonus: null
  }
]

// export const randomEx = () => EXPEDITIONS[Math.floor(Math.random() * EXPEDITIONS.length)];