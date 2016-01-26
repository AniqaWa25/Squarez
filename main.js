setInterval(function(){
	
	var da = new Date();
	
	if(da.getHours() > 12){
	document.getElementById("hours").innerHTML = da.getHours() - 12;
	} else 
	document.getElementById("hours").innerHTML = da.getHours();
	document.getElementById("seconds").innerHTML = da.getSeconds();
	document.getElementById("minutes").innerHTML = da.getMinutes();
	document.getElementById("milliseconds").innerHTML = da.getMilliseconds();

	var minutes = da.getMinutes();

	// if(minutes % 2 === 0){
		// document.body.style.backgroundColor = "#A52A2A"
		// document.body.style.backgroundImage = "url('Untitled.jpg')";
	// 	console.log(minutes +" EVEN");
	// } else {
	// 	document.body.style.backgroundColor = "#808080"
	// 	console.log(minutes + " ODD");
	// }

}, 1000)

function gameOn(){
		document.getElementById("changeUp").innerHTML = "Login!";

	}


$(document).ready(function(){
	console.log("I'm totally working, honestly");

	document.getElementById("right").style.backgroundImage = "url('Untitled.jpg')";


//Password Form
$("form").submit(function(e){

	e.preventDefault();

	var firstname = $("#firstname").val();

	if(firstname ===""){
	$("h1").html("You need to provide a Player name")
	} else {
		console.log("should redirect now")
	} 

		// $("h1").animate({
		// 	height: "toggle"
		// }, "slow")

})


//Letter or Number keypress
	$(document).keypress(function(e){

		if(e.keyCode >= 48 && e.keyCode <= 57){
			console.log(" Number?")
			$("h3").html("Number")
		} else if (e.keyCode >= 65 && e.keyCode <= 122){
			console.log("Letter")
			$("h3").html("Letter")
		}
	})

})
