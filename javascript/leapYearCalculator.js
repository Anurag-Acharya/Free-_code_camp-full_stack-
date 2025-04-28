function isLeapYear(number) {
    if (number % 4 == 0) {
        if (number % 100 == 0 && number % 400 == 0) {
            return `${number} is a leap year.`;
        }
        else if (number % 100 == 0 && number % 400 != 0) {
            return `${number} is not a leap year.`;
        }
        else {
            return `${number} is a leap year.`;
        }
    } else {
        return `${number} is not a leap year.`;
    } 
}

let year = 2024;
let result = isLeapYear(year);
console.log(result);

year = 2000;
result = isLeapYear(year);
console.log(result);

year = 1900;
result = isLeapYear(year);
console.log(result);
