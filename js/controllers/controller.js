function newGame(){
};

function questionOne(){
	var name = prompt("What is your name?");
	var answerOne = prompt("You and your friend Dave \n
		have just spent the night at a friends party. \n
		It's starting to getting fairly late and \n
		you both decide to go crash at your house. \n
		You're both fairly buzzed by this point and \n
		determine your best 3 options for getting home. \n
		Take a shortcut through the woods, call an uber, \n
		or walk the long way home. \n\n
		Enter your choice: 'woods', 'uber', or 'walk'").toLowerCase();
	if(answerOne === "woods"){
		questionOneOne();
	}
	else if(answerOne === "uber"){
		questionOneTwo();
	}
	else if(answerOne === "walk"){
		questionOneThree();
	}
	else{
		alert("I didn't quite understand that try 'woods', 'uber', or 'walk'.");
		questionOne();
	}
};