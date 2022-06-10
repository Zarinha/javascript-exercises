const leapYears = function(year) {
    // a year divisible by 4 is a leap year. However if the year is divisible by 100 and not divisible by 400, it is not a leap year.
if ( year % 4 == 0 && year % 100 == 0 && year % 400 == 0) return true;
// all year divisible by 4 and not divisible by 100 are leap year.
if ( year % 4 == 0 && year % 100 !== 0 ) return true;
else return false;
};

// Do not edit below this line
module.exports = leapYears;
