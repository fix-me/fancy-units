var voltage;

voltage = {
  V: {
    name: {
      singular: "Volt",
      plural: "Volts",
    },
    to_anchor: 1,
  },
  mV: {
    name: {
      singular: "Millivolt",
      plural: "Millivolts",
    },
    to_anchor: 0.001,
  },
  kV: {
    name: {
      singular: "Kilovolt",
      plural: "Kilovolts",
    },
    to_anchor: 1000,
  },
};

module.exports = {
  metric: voltage,
  imperial: voltage,
  _anchors: {
    metric: {
      unit: "V",
      ratio: 1,
    },
    imperial: {
      unit: "V",
      ratio: 1,
    },
  },
};
