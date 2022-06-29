//square geometric calculations
console.group("Square calculations");
const squareSide = 5;
console.log("The sides of the square masure: "+squareSide+"cm");

function squarePerimeter(squareSide){
    return squareSide * 4;
}
console.log("The perimeter of the square measure: "+squarePerimeter+"cm");

function squareArea(squareSide){
    return squareSide * squareSide;
}
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


//Circle geometric calculations
console.group("Circle calculations");
const circleRadio = 15;
const circlePi = Math.PI;
function circleDiameter(circleRadio){
    return circleRadio*2;
} 
function circlePerimeter(circleRadio){
    const circleDiameter = circleDiameter(circleRadio);
    return circleDiameter*circlePi;
}
function circleArea(circleRadio){
    return (circleRadio*circleRadio)*circlePi;
}


console.log("The circle radio measure: "+circleRadio+"cm");
console.log("The circle diameter measure: "+circleDiameter+"cm");
console.log("The circle Pi measure: "+circlePi+"cm");
console.log("The circle perimeter measure: "+perimeterCircle+"cm");
console.log("The circle area measure: "+circleArea+"cm");


console.groupEnd();