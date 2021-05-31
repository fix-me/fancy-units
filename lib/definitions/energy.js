var metric, imperial;

metric = {
  Wh: {
    name: {
      singular: "Watt-hour",
      plural: "Watt-hours",
    },
    to_anchor: 3600,
  },
  mWh: {
    name: {
      singular: "Milliwatt-hour",
      plural: "Milliwatt-hours",
    },
    to_anchor: 3.6,
  },
  kWh: {
    name: {
      singular: "Kilowatt-hour",
      plural: "Kilowatt-hours",
    },
    to_anchor: 3600000,
  },
  MWh: {
    name: {
      singular: "Megawatt-hour",
      plural: "Megawatt-hours",
    },
    to_anchor: 3600000000,
  },
  GWh: {
    name: {
      singular: "Gigawatt-hour",
      plural: "Gigawatt-hours",
    },
    to_anchor: 3600000000000,
  },
  J: {
    name: {
      singular: "Joule",
      plural: "Joules",
    },
    to_anchor: 1,
  },
  kJ: {
    name: {
      singular: "Kilojoule",
      plural: "Kilojoules",
    },
    to_anchor: 1000,
  },
};

imperial = {
  BTU: {
    name: {
      singular: "British Thermal Unit",
      plural: "British Thermal Units",
    },
    to_anchor: 1,
  },
  thm: {
    name: {
      singular: "Therm",
      plural: "Therms",
    },
    to_anchor: 100000,
  },
};

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: "J",
      ratio: 1 / 1055.06,
    },
    imperial: {
      unit: "BTU",
      ratio: 1055.06,
    },
  },
};
