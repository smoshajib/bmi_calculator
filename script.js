    //  BMI = weight (kg) / (height (m) * height (m))

    var weight, height, result, bmi, error ;  
    function calculateBtn()
    {
        weight = document.getElementById("weightInput").value;
	height = document.getElementById("heightInput").value;
	error = "Please enter some values";
	height /= 100; //convert cm to m
	height *= height;

	bmi = weight/height;
	bmi = bmi.toFixed(2);

	if (bmi <= 18.4) {
		result = "Your BMI is " + bmi + " which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		result = "Your BMI is " + bmi + " which means " + "You are Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		result = "Your BMI is " + bmi + " which means " + "You are Overweight";
	} else if (bmi >= 30) {
		result = "Your BMI is " + bmi + " which means " + "You are Obese";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = result;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
    }