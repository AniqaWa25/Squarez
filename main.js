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

	if(minutes % 2 === 0){
		document.body.style.backgroundColor = "#A52A2A"
		console.log(minutes +" EVEN");
	} else {
		document.body.style.backgroundColor = "#808080"
		console.log(minutes + " ODD");
	}

}, 1000)

function gameOn(){
		document.getElementById("changeUp").innerHTML = "Login!";
	}


$(document).ready(function(){
	console.log("I'm totally working, honestly")


 $("li").mouseover(function(){
        $(this).stop().animate({height:'100px'},{queue:false, duration:600})
    });
 
    //When mouse is removed
    $("li").mouseout(function(){
        $(this).stop().animate({height:'20px'},{queue:false, duration:600})
    });

//Password & Username Validation Form
var correctPassword = "12345";
var correctUser = "Aniqa";

$("form").submit(function(e){

	e.preventDefault();

	var firstname = $("#firstname").val()
	// var password = $("#password").val()
	// console.log(firstname + " " + password);

	if(firstname ===""){
	$("h1").html("You need to provide a Player name")
	} else {
		console.log("should redirect now")
	} 

	// if (password !== "" && correctUser === firstname){
	// 	console.log(firstname + " YES")
	// 	$("h1").html("GOOD JOB, DARNIT")

	// } else{
	// 	console.log(password + " NOOOOOOOOOOO")
	// 	$("h1").html("Try Again!");

		$("h1").animate({
			height: "toggle"
		}, "slow")
	//}

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


	
	$("h4").html('Your OS: '+OSName);

	if(OSName !== ""){
		$("h4").animate({
			fontSize: "30px",
			opacity: .75
		})
	}

	
	// $("h5").html('Browser name: '+browserName);
	// if(browserName !== ""){
	// 	$("h5").animate({
	// 		fontSize: "30px",
	// 		opacity: .5,
	// 	})
	// }

	$("h6").html("Screen width = "+screenW+"<br>"+"Screen height = "+screenH);
	
	if((screenW && screenH) !== ""){
		$("h6").animate({
			height: "toggle"
		}, "slow")
	}


//Resizing stuff happening here
	
	$(window).resize(function(){
		
		//animating navigation bar
		$(".nav-bar").animate({
			fontSize: "20px",
			opacity: "toggle"
		}, "slow")
		console.log("RESIZING!");
	})
	


})
