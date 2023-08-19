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
    // validate
    if(isNaN(base) || isNaN(height)){
        alert('please inset number');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area',area);
    
    // add to calculation entry
 addTOCalculationEntry('parallelogram',area)

}
// rhombus
function calculateRhombusArea(){
    const diagonal1 = getInputValue('rhombus-diagonal-1');
    const diagonal2 = getInputValue('rhombus-diagonal-2');
    const area = 0.5 * diagonal1 * diagonal2;
    setElementInnerText('rhombus-area',area);
    addTOCalculationEntry('Rhombus',area);
}
// pentagon
function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const base = getInputValue('pentagon-base');
    const area = 0.5 * perimeter * base;
    setElementInnerText('pentagon-area',area);
    addTOCalculationEntry('Pentagon',area)
}
// ellipse
function calculateEllipseArea(){
    const mejorRedius = getInputValue('ellipse-mejor-redius');
    const minorRedius = getInputValue('ellipse-minor-redius');
    const areaCal = 3.14 * mejorRedius * minorRedius;
    const area = areaCal.toFixed(2);

    setElementInnerText('ellipse-area',area);
    addTOCalculationEntry('ellipse',area)
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

  // add to calculation entry
  /* 
  1.get the element where you want to add the dynamic html
  2.create an element you want to add
  3.if needed add some class
  4.set inner html.it could be dynamic template string
  5.append the created element as a child of the parent
   */
 function addTOCalculationEntry(areaType,area){
    console.log(areaType+ ' ' + area)
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML =  `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class ="btn btn-sm btn-success text-white">Convert</button>`;
    calculationEntry.appendChild(p);
 }