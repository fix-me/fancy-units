var metric, imperial;

metric = {
  "g-force": {
    name: {
      singular: "g-force",
      plural: "g-forces",
    },
    to_anchor: 9.80665,
  },
  "m/s2": {
    name: {
      singular: "Metre per second squared",
      plural: "Metres per second squared",
    },
    to_anchor: 1,
  },
};

module.exports = {
  metric: metric,
  imperial: metric,
  _anchors: {
    metric: {
      unit: "g-force",
      ratio: 1,
    },
    imperial: {
      unit: "g-force",
      ratio: 1,
    },
  },
};
