var apparentPower;

apparentPower = {
  VA: {
    name: {
      singular: "Volt-Ampere",
      plural: "Volt-Amperes",
    },
    to_anchor: 1,
  },
  mVA: {
    name: {
      singular: "Millivolt-Ampere",
      plural: "Millivolt-Amperes",
    },
    to_anchor: 0.001,
  },
  kVA: {
    name: {
      singular: "Kilovolt-Ampere",
      plural: "Kilovolt-Amperes",
    },
    to_anchor: 1000,
  },
  MVA: {
    name: {
      singular: "Megavolt-Ampere",
      plural: "Megavolt-Amperes",
    },
    to_anchor: 1000000,
  },
  GVA: {
    name: {
      singular: "Gigavolt-Ampere",
      plural: "Gigavolt-Amperes",
    },
    to_anchor: 1000000000,
  },
};

module.exports = {
  metric: apparentPower,
  imperial: apparentPower,
  _anchors: {
    metric: {
      unit: "VA",
      ratio: 1,
    },
    imperial: {
      unit: "VA",
      ratio: 1,
    },
  },
};
