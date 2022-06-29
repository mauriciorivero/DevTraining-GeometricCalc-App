//square geometric calculations
console.group("Square calculations");
const squareSide = 5;

function squarePerimeter(squareSide){
    return squareSide * 4;
}

function squareArea(squareSide){
    return squareSide * squareSide;
}

console.groupEnd();

//Triangle geometric calculations
console.group("Triangle calculations");
const triangleSide1 = 5;
const triangleSide2 = 5;
const triangleBase = 10;
const triangleHeight = 5.5;


function trianglePerimeter(triangleSide1,triangleSide2,triangleBase){
    return triangleSide1+triangleSide2+triangleBase;
}
function triangleArea(triangleBase,triangleHeight){
    return (triangleBase*triangleHeight)/2;
}


console.groupEnd();


//Circle geometric calculations
console.group("Circle calculations");
const circleRadio = 15;
const circlePi = Math.PI;
function circleDiameter(circleRadio){
    return circleRadio*2;
} 
function circlePerimeter(circleRadio){
    const diameter = circleDiameter(circleRadio);
    return diameter*circlePi;
}
function circleArea(circleRadio){
    return (circleRadio*circleRadio)*circlePi;
}
console.groupEnd();