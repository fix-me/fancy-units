var current;

current = {
  A: {
    name: {
      singular: "Ampere",
      plural: "Amperes",
    },
    to_anchor: 1,
  },
  mA: {
    name: {
      singular: "Milliampere",
      plural: "Milliamperes",
    },
    to_anchor: 0.001,
  },
  kA: {
    name: {
      singular: "Kiloampere",
      plural: "Kiloamperes",
    },
    to_anchor: 1000,
  },
};

module.exports = {
  metric: current,
  imperial: current,
  _anchors: {
    metric: {
      unit: "A",
      ratio: 1,
    },
    imperial: {
      unit: "A",
      ratio: 1,
    },
  },
};
