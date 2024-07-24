$("#submit").on("click", function() {
    let heightInM = parseFloat($('#input1').val());
    let weightInKg = parseFloat($('#input2').val());
    console.log('Weight (kg):', weightInKg);
    console.log('Height (m):', heightInM);
    var bmi = calculateBMI(weightInKg, heightInM);
    console.log(bmi);
    $('.output').text(bmi);
    $(".output").attr("class", "white")
});

function calculateBMI(weight, height) {
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        return 'Invalid input';
    }
    var bmi = weight / (height * height);
    if (bmi < 18.5) {
        return `BMI: ${bmi.toFixed(2)} and Category: Underweight`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return `BMI: ${bmi.toFixed(2)} and Category: Normal weight`;
    } else if (bmi >= 25 && bmi < 29.9) {
        return `BMI: ${bmi.toFixed(2)} and Category: Overweight`;
    } else {
        return `BMI: ${bmi.toFixed(2)} and Category: Obese`;
    }
}
