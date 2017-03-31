// The Calculator
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function( num ) {
  var result = num * num;
  console.log( "The result of squaring the number " + num + " is " + result );
  return result;
};

squareNumber( 5 );

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function ( number ) {
  var result = number / 2;
  console.log( "Half of " + number + " is " + result + ".");
  return result;
};

halfNumber( 5 )


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function ( numOne, numTwo ) {
  var result = numOne / numTwo * 100;
  console.log(numOne + " is " + result + "% of " + numTwo + ".");
  return result;
};

percentOf( 7, 10 );

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var areaOfCircle = function ( radius ) {
  var result = Math.PI * radius * radius;
  result = result.toFixed(2);
  console.log("The area for a circle with a radius " + radius + " is " + result );
  return result;
};

areaOfCircle(2);


// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var calculator = function ( val ) {
  var half = halfNumber ( val );
  console.log(half);
  var square = squareNumber(half);
  console.log(half);
  var area = areaOfCircle(square);
  console.log(area);
  var percentage = percentOf(area, square);
  console.log(percentage);
};

calculator( 10 );