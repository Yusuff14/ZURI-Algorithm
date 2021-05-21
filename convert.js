function convertFahrToCelsius(fahrenheit) {
    let checkType = Object.prototype.toString.call(fahrenheit).slice(8, -1);
    let isNumber = /^\d+$/.test(fahrenheit);
  
    if (checkType === "Number", "String" && isNumber) {
      celsius = (fahrenheit - 32)/1.8;
      celsius = celsius.toFixed(4);
      return celsius;
    } 
    else {
      let stringifyFahrenheit = JSON.stringify(fahrenheit);
  
      return `${stringifyFahrenheit} is not a valid number but a/an ${checkType}`;
    }
  }

console.log(convertFahrToCelsius([1,2,3]))
