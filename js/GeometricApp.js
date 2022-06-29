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

const triangleHeight = 0;

function verifyTriangleType(triangleSide1, triangleSide2, triangleBase){
    if((triangleSide1==triangleSide2)&&(triangleSide1!=triangleBase)){
        let isocelesPerimeter = triangleSide1+triangleSide2+triangleBase;
        let isocelesArea = Math.sqrt((Math.pow(triangleSide1, 2))-((Math.pow(triangleSide2, 2)/4)));

        document.getElementById("triangleTypeResult").innerHTML="The triangle is isoceles";
        document.getElementById("triangleAreaResult").innerHTML = "The area of the Isoceles Triangle is: "+isocelesArea;
        document.getElementById("trianglePerimeterResult").innerHTML = "The perimeter of the Isoceles Triangle is: "+isocelesPerimeter;
    }else if((triangleSide1==triangleSide2)&&(triangleSide1==triangleBase)){
        let equilateralPerimeter = triangleSide1+triangleSide2+triangleBase;
        let equilateralArea = ((Math.sqrt(3))/4)*(Math.pow(triangleSide1,2));

        document.getElementById("triangleTypeResult").innerHTML="The triangle is equilateral";
        document.getElementById("triangleAreaResult").innerHTML = "The area of the equilateral Triangle is: "+equilateralArea;
        document.getElementById("trianglePerimeterResult").innerHTML = "The perimeter of the equilateral Triangle is: "+equilateralPerimeter;
    }else if(triangleSide1!=triangleSide2!=triangleBase){
        let scalenePerimeter = triangleSide1+triangleSide2+triangleBase;
        let semiperimeter = scalenePerimeter/2;
        let scaleneArea = (2/triangleSide1)*(Math.sqrt(semiperimeter*(semiperimeter-triangleSide1)*(semiperimeter-triangleSide2)*(semiperimeter-triangleBase)));
        
        document.getElementById("triangleTypeResult").innerHTML="The triangle is scalene";
        document.getElementById("triangleAreaResult").innerHTML = "The area of the scalene Triangle is: "+scaleneArea;
        document.getElementById("trianglePerimeterResult").innerHTML = "The perimeter of the scalene Triangle is: "+scalenePerimeter;
    }
}

function trianglePerimeter(triangleSide1,triangleSide2,triangleBase){
    return triangleSide1+triangleSide2+triangleBase;
}
function triangleArea(triangleBase,triangleHeight){
    return (triangleBase*triangleHeight)/2;
}

document.getElementById("startTriangleCalculation").onclick = function(){
    const triangleSide1 = parseInt(document.getElementById("triangleSideA").value);
    const triangleSide2 = parseInt(document.getElementById("triangleSideB").value);
    const triangleBase = parseInt(document.getElementById("triangleSideC").value);
    verifyTriangleType(triangleSide1, triangleSide2, triangleBase);
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