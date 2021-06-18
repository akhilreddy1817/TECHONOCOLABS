var kelvin = 293;
//temperature in kelvin stored in variable 'kelvin'

var celsius = kelvin - 273;
//temperature in celsius stored in variable 'celsius'

let Fahrenheit = celsius * (9/5) + 32;
// it was the given equation 

Fahrenheit = Math.floor(Fahrenheit);
// using math.floor method

console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`)
// console
