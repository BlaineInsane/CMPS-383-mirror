// Creates the array of objects used by the value picker
// in RecordTemps.js

const TEMPERATURE_PICKER_NUMBERS = [];
var i;
for (i = 98.0; i <= 104.0; i = i + 0.1) {
  TEMPERATURE_PICKER_NUMBERS.push({
    value: i.toFixed(1),
    label: i.toFixed(1) + "\u00b0 F",
  });
}

export { TEMPERATURE_PICKER_NUMBERS };
