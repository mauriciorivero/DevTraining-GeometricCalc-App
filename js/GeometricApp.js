//square geometric calculations

function squareCalculations(squareSide){
    let squarePerimeter = squareSide*4;
    let squareArea = squareSide*squareSide;
}


//Triangle geometric calculations

document.getElementById("startTriangleCalculation").onclick = function(){
    const triangleSide1 = parseInt(document.getElementById("triangleSideA").value);
    const triangleSide2 = parseInt(document.getElementById("triangleSideB").value);
    const triangleBase = parseInt(document.getElementById("triangleSideC").value);
    triangleCalculations(triangleSide1, triangleSide2, triangleBase);
}

function triangleCalculations(triangleSide1, triangleSide2, triangleBase){
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


//Circle geometric calculations

function circleCalculations(radius){
    const circleRadio = radius;
    const circlePi = Math.PI;
    let circleDiameter = circleRadio*2;
    let circlePerimeter = circleDiameter*circlePi;
    let circleArea = (circleRadio*circleRadio)*circlePi;
}