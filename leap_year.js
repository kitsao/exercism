const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

let year = 1997;
console.log(isLeapYear(year));
year = 1996;
console.log(isLeapYear(year));
year = 1900;
console.log(isLeapYear(year));
year = 2000;
console.log(isLeapYear(year));
