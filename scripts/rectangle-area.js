function calculateRectangleArea() {
  const lengthInput = document.getElementById("rectangle-length");
  const lengthText = lengthInput.value;
  const length = parseFloat(lengthText);
  console.log(length);

  const widthInput = document.getElementById("rectangle-width");
  const widthText = widthInput.value;
  const width = parseFloat(widthText);
  console.log(width);

  const area = width * length;
  document.getElementById("rectangle-area").innerText = area;
  console.log("area of the rectangle is : ", area);
}
