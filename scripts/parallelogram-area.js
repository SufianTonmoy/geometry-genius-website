function calculateParallelogramArea() {
  const base = getInputValueById("parallelogram-base");
  // console.log('base :',base);
  const height = getInputValueById("parallelogram-height");
  // console.log('height :',height);
  const area = base * height;

  setValue("parallelogram-area", area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);

  return inputValue;
}

function setValue(areaId, area) {
  const showArea = document.getElementById(areaId);
  showArea.innerText = area;
}
