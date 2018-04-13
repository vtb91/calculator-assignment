//declare variables
var daily,
	dailyHours,
	monthly,
	monthlyHours,
	yearly,
	yearlyHours,
	rounded,
	num1,
	num2

$(document).ready(function () { //on DOM ready, bind clicks
	//get value of input fields
	$("#mathIt").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior

		// getNumber1 = $("#number1"),
		// num1 = parseFloat(getNumber1.val()); //store the number of input 1
		num1 = parseFloat($("#number1").val()); //store the number of input 1
		num2 = parseFloat($("#number2").val()); //store the number of input 2
		num3 = parseFloat($("#number3").val()); //store the number of input 3
		num4 = parseFloat($("#number4").val()); //store the number of input 4
		num5 = parseFloat($("#number5").val()); //store the number of input 5
		num6 = parseFloat($("#number6").val()); //store the number of input 6
		num7 = parseFloat($("#number7").val()); //store the number of input 7


		console.log(num1, num2, num3, num4, num5, num6, num7);
		runMath(); //call runMath function
		showIt(); //call the showIt function
	}); // close get value of input fields
}); // close document ready

//function to add, subtract, divide and multiply
function runMath() {
	daily = num1 + num2 + num3 + num4 + num5 + num6 + num7;
	dailyHours = daily;
	monthly = daily * 30.42;
	monthlyHours = parseFloat(monthly / 60).toFixed(1);
	yearly = (num1 + num2 + num3 + num4 + num5 + num6 + num7) * 365;
	yearlyHours = parseFloat(yearly / 60).toFixed(1);
	console.log(daily, dailyHours, monthly, monthlyHours, yearly, yearlyHours, rounded)
}; //close runMath()

function showIt() {
	$("#show-daily").text(daily); // plugs sum into text
	$("#show-monthlyHours").text(monthlyHours); // plugs difference into text
	$("#show-yearlyHours").text(yearlyHours); // plugs product into text
	$('#final-results').addClass('results-show'); //shows the hidden class

}; //close showIt()
