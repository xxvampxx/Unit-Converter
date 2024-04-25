const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

let lengthContent = document.getElementById("length-content");
let volumeContent = document.getElementById("volume-content");
let massContent = document.getElementById("mass-content");

convertBtn.addEventListener("click", function () {
    //get inputEl value
    const inputValue = inputEl.value;
    //convert length function
    function convertLengthToFeet() {
        outputValue = inputValue * 3.281;
        return outputValue;
    }
    function convertLengthToMeters() {
        outputValue = inputValue / 3.281;
        return outputValue;
    }
    //change p tag content
    lengthContent.innerText = `${inputEl.value} meters = ${convertLengthToFeet().toFixed(3)} feet | ${inputEl.value} feet = ${convertLengthToMeters().toFixed(3)} meters `;

    //convert volume function
    function convertVolumeToGallons() {
        outputValue = inputValue * 0.264;
        return outputValue;
    }
    function convertVolumeToLiters() {
        outputValue = inputValue / 0.264;
        return outputValue;
    }
    //change p tag content
    volumeContent.innerText = `${inputEl.value} liters = ${convertVolumeToGallons().toFixed(3)} gallons | ${inputEl.value} gallons = ${convertVolumeToLiters().toFixed(3)} liters `;

    //convert mass function
    function convertMassToPounds() {
        outputValue = inputValue * 2.204;
        return outputValue;
    }
    function convertMassToKilos() {
        outputValue = inputValue / 2.204;
        return outputValue;
    }
    //change p tag content
    massContent.innerText = `${inputEl.value} kilos = ${convertMassToPounds().toFixed(3)} pounds | ${inputEl.value} pounds = ${convertMassToKilos().toFixed(3)} kilos`;

})

