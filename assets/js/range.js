'use strict';
// ================================RANGE SERVISES=========================================
const squareInput = document.getElementById('square-input');
const squareRange = document.getElementById('square-range');
const squareInputHeight = document.getElementById('square-range-height');
const squareRangeHeight = document.getElementById('square-input-height');
const inputs = document.querySelectorAll('input');

// связываем range c текстовым полем
squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value;
});
squareRangeHeight.addEventListener('input', function () {
    squareInputHeight.value = squareRangeHeight.value;
});
// связываем текстовым полем c  range
squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
});
squareInputHeight.addEventListener('input', function () {
    squareRangeHeight.value = squareInputHeight.value;
});
// ================================RANGE SERVISES=========================================
