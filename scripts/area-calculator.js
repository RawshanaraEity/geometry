function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValue = baseField.value;
    const base = parseFloat(baseValue);
    console.log(base)

    // get triangle height
    const heightField = document.getElementById('triangle-height');
    const heightValue = heightField.value;
    const height = parseFloat(heightValue);
    console.log(height)

    const area = 0.5 * base * height;
    console.log(area)
    // 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

// rectangle 
function calculateRectangleArea(){
    // rectangle width
   const widthfield = document.getElementById('rectangle-width');
   const widthValue = widthfield.value;
   const width = parseFloat(widthValue);
   console.log(width)
// rectangle length
   const lengthField = document.getElementById('rectangle-length');
   const lengthValue = parseFloat(lengthField.value);
  
   const area = width * lengthValue;
   console.log(area)
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}

// reusable function --->reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')
    const area = base * height;
    setElementInnerText('parallelogram-area',area);
    
}

function calculateEllipseArea(){
    const mejorRedius = getInputValue('ellipse-mejor-redius');
    const minorRedius = getInputValue('ellipse-minor-redius');
    const area = 3.14 * mejorRedius * minorRedius;
    setElementInnerText('ellipse-area',area)
}
// reusable get input value in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set span,p,div,text etc
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}