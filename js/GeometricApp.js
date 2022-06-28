//square geometric calculations
console.group("Square calculations");
const squareSide = 5;
console.log("The sides of the square masure: "+squareSide+"cm");

const squarePerimeter = squareSide * 4;
console.log("The perimeter of the square measure: "+squarePerimeter+"cm");

const squareArea = squareSide * squareSide;
console.log("The square area measure: "+squareArea+"cm^2");

console.groupEnd();

//Triangle geometric calculations
console.group("Triangle calculations");
const triangleSide1 = 5;
const triangleSide2 = 5;
const triangleBase = 10;
const triangleHeight = 5.5;

console.log(
    "The triangle side 1 measure: "+triangleSide1+"cm, "
    +"the triangle side 2 measure: "+triangleSide2+"cm, "
    +"the triangle base measure: "+triangleBase+"cm, "
    +"the triangle height measure: "+triangleHeight+"cm"
);

const trianglePerimeter = triangleSide1+triangleSide2+triangleBase;
const triangleArea = (triangleBase*triangleHeight)/2;

console.log("The triangle perimenter measure: "+trianglePerimeter+"cm");
console.log("The triangle area measure: "+triangleArea+"cm^2");

console.groupEnd();