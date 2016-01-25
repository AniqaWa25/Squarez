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
		document.body.style.backgroundColor = "#6495ED"
		console.log(minutes +" EVEN");
	} else {
		document.body.style.backgroundColor = "pink"
		console.log(minutes + " ODD");
	}

}, 1000)


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
	var password = $("#password").val()
	console.log(firstname + " " + password);

	if(firstname ===""){
	$("h1").html("Please fill it out?")
	} else if (correctPassword === password && correctUser === firstname){
		console.log(firstname + " YES")
		$("h1").html("GOOD JOB, DARNIT")

	} else{
		console.log(password + " NOOOOOOOOOOO")
		$("h1").html("Try Again!");

		$("h1").animate({
			height: "toggle"
		}, "slow")
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


//OS Name happening here
	var OSName="Unknown OS";
	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
	if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
	if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

	console.log('Your OS' + OSName);
	
	$("h4").html('Your OS: '+OSName);

	if(OSName !== ""){
		$("h4").animate({
			fontSize: "30px",
			opacity: .75
		})
	}

	

//Which Browser happening here
	var nAgt = navigator.userAgent;
	var browserName  = navigator.appName;
	var nameOffset,verOffset,ix;

	// In Opera 15+, the true version is after "OPR/" 
	if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
	 browserName = "Opera";
	}
	// In older Opera, the true version is after "Opera" or after "Version"
	else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
	 browserName = "Opera";
	}
	// In MSIE, the true version is after "MSIE" in userAgent
	else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
	 browserName = "Microsoft Internet Explorer";
	}
	// In Chrome, the true version is after "Chrome" 
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
	 browserName = "Chrome";
	}
	// In Safari, the true version is after "Safari" or after "Version" 
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
	 browserName = "Safari";
	}
	// In Firefox, the true version is after "Firefox" 
	else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
	 browserName = "Firefox";
	}
	// In most other browsers, "name/version" is at the end of userAgent 
	else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
	          (verOffset=nAgt.lastIndexOf('/')) ) 
	{
	 browserName = nAgt.substring(nameOffset,verOffset);
	 if (browserName.toLowerCase()==browserName.toUpperCase()) {
	  browserName = navigator.appName;
	 }
	}
	
	$("h5").html('Browser name: '+browserName);
	if(browserName !== ""){
		$("h5").animate({
			fontSize: "30px",
			opacity: .5,
		})
	}

//Size of window happening here
	var screenW = 640, screenH = 480;
	if (parseInt(navigator.appVersion)>3) {
	 screenW = screen.width;
	 screenH = screen.height;
	} else if (navigator.appName == "Netscape" 
	    && parseInt(navigator.appVersion)==3
	    && navigator.javaEnabled()
	   ){
	 var jToolkit = java.awt.Toolkit.getDefaultToolkit();
	 var jScreenSize = jToolkit.getScreenSize();
	 screenW = jScreenSize.width;
	 screenH = jScreenSize.height;
	}

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
