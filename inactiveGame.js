var score = 0;
var timer = 120; //two minutes
var id = 0;
var boxArray = [];
var numOfBoxes = 0;

function createBox(i){ //General
	var el = document.createElement("div");
	var nu = document.createElement("img");
	//nu.setAttribute('src','http://www.raidkillsbugs.com/~/media/raid/bugs/flies/indoor-breeding-flies/indoor-fly-top-v.png?sc_lang=en-US');
	//nu.style.color = "white";
	//el.appendChild(nu);
	el.setAttribute("id",""+i+"");
	el.setAttribute("class","box");
	nu.setAttribute("id","img"+i+"");
	el.style.width = ""+getRandomInt(25,100)+"px";
	el.style.height = el.style.width;
	nu.style.width =  el.style.width;
	nu.style.width = el.style.width;
	el.appendChild(nu);
	el.style.background = "#"+getRandomInt(000000,999999)+"";
	el.style.marginRight = "10px";
	el.style.display = "inline-block";
	el.style.color = "white";
	document.getElementsByTagName("body")[0].appendChild(el);
	id++;
	//console.log(id);
}

function getRidOfDiv(i){
	while (i<boxArray.length){
		boxArray[i]=boxArray[i+1];
		i++;
	}
	boxArray.pop();
	console.log(boxArray.length);
}

function rotate(i) {
	var angle = getRandomInt(0,360);
	$('#'+i+"").css("-ms-transform", "rotate("+angle+"deg)");
	$('#'+i+"").css("-webkit-transform", "rotate("+angle+"deg)");
	$('#'+i+"").css("-transform", "rotate("+angle+"deg)");
}

function changeBoxSize (i) {
	var length = getRandomInt(25,100);
	$('#'+i+"").css("height", ""+length+"px");
	$('#'+i+"").css("width", ""+length+"px");
}

function animateBox(i){
    var newq = makeNewPosition();
    $('#'+i+"").animate({ top: newq[getRandomInt(0,1)], left: newq[getRandomInt(0,1)] }, 50, function(){
    	rotate(i);
    	changeBoxSize(i);
    	i=(i+getRandomInt(0,boxArray.length))%boxArray.length;	
    	animateBox(i);        
    });
}

function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 100;
    var w = $(window).width() - 100;
		    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
	    
    return [nh,nw];    
	    
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){
    for (var i = 0; i<10; i++) {
    	boxArray.push(createDiv(i));
    };
    console.log(boxArray);
   animateBox(0); 
}); 