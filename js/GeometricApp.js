//The navigation flow is programed here
document.getElementById("square_option").style.display="none";
document.getElementById("triangle_option").style.display="none";
document.getElementById("rectangle_option").style.display="none";
document.getElementById("rhombus_option").style.display="none";
document.getElementById("rhomboid_option").style.display="none";
document.getElementById("trapezoid_option").style.display="none";
document.getElementById("circle_option").style.display="none";


document.getElementById("squareOptionShow").onclick = function(){
    document.getElementById("main_options").style.display="none";
    document.getElementById("square_option").style.display="inline-block";
}

document.getElementById("squareOptionBack").onclick = function(){
    document.getElementById("main_options").style.display="inline-block";
    document.getElementById("square_option").style.display="none";
}

document.getElementById("rectangleOptionShow").onclick = function(){
    document.getElementById("main_options").style.display="none";
    document.getElementById("rectangle_option").style.display="inline-block";
}

document.getElementById("rectangleOptionBack").onclick = function(){
    document.getElementById("main_options").style.display="inline-block";
    document.getElementById("rectangle_option").style.display="none";
}

document.getElementById("triangleOptionShow").onclick = function(){
    document.getElementById("main_options").style.display="none";
    document.getElementById("triangle_option").style.display="inline-block";
}

document.getElementById("traingleOptionBack").onclick = function(){
    document.getElementById("main_options").style.display="inline-block";
    document.getElementById("triangle_option").style.display="none";
}

document.getElementById("rhombusOptionShow").onclick = function(){
    document.getElementById("main_options").style.display="none";
    document.getElementById("rhombus_option").style.display="inline-block";
}

document.getElementById("rhombusOptionBack").onclick = function(){
    document.getElementById("main_options").style.display="inline-block";
    document.getElementById("rhombus_option").style.display="none";
}

document.getElementById("rhomboidOptionShow").onclick = function(){
    document.getElementById("main_options").style.display="none";
    document.getElementById("rhomboid_option").style.display="inline-block";
}

document.getElementById("rhomboidOptionBack").onclick = function(){
    document.getElementById("main_options").style.display="inline-block";
    document.getElementById("rhomboid_option").style.display="none";
}

document.getElementById("trapezoidOptionShow").onclick = function(){
    document.getElementById("main_options").style.display="none";
    document.getElementById("trapezoid_option").style.display="inline-block";
}

document.getElementById("trapezoidOptionBack").onclick = function(){
    document.getElementById("main_options").style.display="inline-block";
    document.getElementById("trapezoid_option").style.display="none";
}

document.getElementById("circleOptionShow").onclick = function(){
    document.getElementById("main_options").style.display="none";
    document.getElementById("circle_option").style.display="inline-block";
}

document.getElementById("circleOptionBack").onclick = function(){
    document.getElementById("main_options").style.display="inline-block";
    document.getElementById("circle_option").style.display="none";
}



//square geometric calculations
document.getElementById("startSquareCalculation").onclick = function(){
    const squareSide = parseInt(document.getElementById("squareSide").value);
    document.getElementById("squarePerimeterResult").innerHTML = "The square perimeter measures: "+squarePerimeter(squareSide);
    document.getElementById("squareAreaResult").innerHTML = "The square area measures: "+squareArea(squareSide);
}

function squarePerimeter(squareSide){
    return squareSide*4;
}

function squareArea(squareSide){
    return squareSide*squareSide;
}

//Rectangle geometric calculations
document.getElementById("startRectangleCalculation").onclick = function(){
    const rectangleBase = parseInt(document.getElementById("rectangleBase").value);
    const rectangleHeight = parseInt(document.getElementById("rectangleHeight").value);
    document.getElementById("rectanglePerimeterResult").innerHTML = "The rectangle perimeter measures: "+rectanglePerimeter(rectangleBase, rectangleHeight);
    document.getElementById("rectangleAreaResult").innerHTML = "The rectangle area measures: "+rectangleArea(rectangleBase, rectangleHeight);
}

function rectanglePerimeter(rectangleBase, rectangleHeight){
    return (2*rectangleBase)+(2*rectangleHeight);
}

function rectangleArea(rectangleBase, rectangleHeight){
    return rectangleBase*rectangleHeight;
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
        let isocelesPerimeter = (triangleSide1+triangleSide2+triangleBase)/2;
        let isocelesArea = Math.sqrt(isocelesPerimeter*(isocelesPerimeter-triangleSide1)*(isocelesPerimeter-triangleBase)*(isocelesPerimeter-triangleSide2));

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
        let scaleneArea = Math.sqrt(semiperimeter*(semiperimeter-triangleSide1)*(semiperimeter-triangleSide2)*(semiperimeter-triangleBase));

        document.getElementById("triangleTypeResult").innerHTML="The triangle is scalene";
        document.getElementById("triangleAreaResult").innerHTML = "The area of the scalene Triangle is: "+scaleneArea;
        document.getElementById("trianglePerimeterResult").innerHTML = "The perimeter of the scalene Triangle is: "+scalenePerimeter;
    }
}

//Rhombus geometric calculations
document.getElementById("startRhombusCalculation").onclick = function(){
    const rhombusSide = parseInt(document.getElementById("rhombusSide").value);
    const rhombusMajorDiagonal = parseInt(document.getElementById("rhombusMajorDiagonal").value);
    const rhombusMinorDiagonal = parseInt(document.getElementById("rhombusMinorDiagonal").value);
    document.getElementById("rhombusPerimeterResult").innerHTML = "The rhombus perimeter measures: "+rhombusPerimeter(rhombusSide);
    document.getElementById("rhombusAreaResult").innerHTML = "The rhombus area measures: "+rhombusArea(rhombusMajorDiagonal, rhombusMinorDiagonal);
}

function rhombusPerimeter(rhombusSide){
    return 4*rhombusSide
}

function rhombusArea(rhombusMajorDiagonal, rhombusMinorDiagonal){
    return (rhombusMajorDiagonal*rhombusMinorDiagonal)/2;
}


//Circle geometric calculations

function circleCalculations(radius){
    const circleRadio = radius;
    const circlePi = Math.PI;
    let circleDiameter = circleRadio*2;
    let circlePerimeter = circleDiameter*circlePi;
    let circleArea = (circleRadio*circleRadio)*circlePi;
}