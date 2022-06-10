const ftoc = function(fhrt) {
const celcius = (fhrt - 32) * (5/9);
let num = celcius;
if (num = Number.isInteger(celcius)) return celcius;
else return Number(celcius.toFixed(1));
};

const ctof = function(c) {
const fahrenheit = (c * (9/5)) + 32;
let numb = fahrenheit;
if (numb = Number.isInteger(fahrenheit)) return fahrenheit;
else return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
