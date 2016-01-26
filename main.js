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
}, 1000)


// function gameOn(){
// 		document.getElementById("changeUp").innerHTML = "Login!";
// 	}

$(document).ready(function(){
	console.log("I'm totally working, honestly");

//Password Form
	$("form").submit(function(e){

		var firstname = $("#firstname").val();

		if(firstname ===""){
			console.log("EMPTY!!!");
			$("h1").html("Please provide a Player name");
			e.preventDefault();
		} 
		else {
			console.log("should redirect now");
		}
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
