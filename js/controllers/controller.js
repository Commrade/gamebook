function newGame(){
};

function name(){
	var name = prompt("Enter your name: ");
}

function questionOne(){
	var answer = prompt("You and your friend Dave\n"+
		"have just spent the night at a friends party.\n"+
		"It's starting to getting fairly late and\n"+
		"you both decide to go crash at your house.\n"+
		"You're both fairly buzzed by this point and\n"+
		"determine your best 3 options for getting home.\n"+
		"Take a shortcut through the woods, call an uber,\n"+
		"or walk the long way home.\n\n"+
		"Enter your choice: 'woods', 'uber', or 'walk'.").toLowerCase();
	if(answer === "woods"){
		questionOneOne();
	}
	else if(answer === "uber"){
		questionOneTwo();
	}
	else if(answer === "walk"){
		questionOneThree();
	}
	else{
		alert("I didn't quite understand that try 'woods', 'uber', or 'walk'.");
		questionOne();
	};
};

function questionOneOne(){
	var answer = prompt("You and Dave turn on some flashlights\n"+
		"and begin walking through the woods.\n"+
		"About half way into the woods you begin hearing the\n"+
		"sounds of leaves and twigs crunching and footsteps\n"+
		"approaching your location. You both turn off your lights\n"+
		"walk a bit further ahead then hide behind some trees.\n"+
		"You peak your head out for a brief moment to see two\n"+
		"clowns standing about 15 feet from where you're hiding.\n"+
		"You know you only have two options to keep watching\n"+
		"or make a run for it.\n\n"+
		"Enter your choice: 'peak' or 'run'.").toLowerCase();
	if(answer === "peak"){
		questionOneOneOne();
	}
	else if(answer === "run"){
		questionOneOneTwo();
	}
	else{
		alert("I didn't quite understand that try 'peak' or 'run'.");
		questionOneOne();
	};
};

function questionOneOneOne(){
	var answer = prompt("As you peak around the tree\n"+
		"you see the two clowns standing as still as statues\n"+
		"after what felt like an hour they finally decided\n"+
		"to go search for the two of you in a different direction.\n"+
		"You look to Dave and know you should either stay here\n"+
		"or make a run for it.\n\n"+
		"Enter your choice: 'wait' or 'run'.").toLowerCase();
	if(answer === "wait"){
		questionOneOneOneOne();
	}
	else if(answer === "run"){
		questionOneOneOneTwo();
	}
	else{
		alert("I didn't quite understand that try 'wait' or 'run'.");
		questionOneOneOne();
	};
};

function questionOneOneTwo(){
	var answer = prompt("You notion to Dave to make a run for it\n"+
		"knowing your house is just on the otherside of the woods.\n"+
		"You take off with all your might, you stumble a bit from\n"+
		"being buzzed but you're able to keep it together.\n"+
		"You hear frantic footsteps behind you from Dave and the\n"+
		"pursuing clowns.  Then you hear a thud and laughter\n"+
		"from the clowns followed by Dave's cry for help\n"+
		"Dave: \n"+//insert Daves help here
		"Do you go back for your friend or run home and\n"+
		"call the police?\n\n"+
		"Enter your choice: 'Dave' or 'run'.").toLowerCase();
	if(answer === "dave"){
		var survival = Math.floor((Math.random() * 2) + 1);
		if (survival === 1){
			alert("You run back to Dave and help him to his feet\n"+
				"the pursuring clowns catch up to you. You quickly\n"+
				"punch one, breaking his nose. The other clown stops in\n"+
				"confusion giving you and Dave a chance to escape.\n"+
				"The clown attempts to chase you but his pants get caught.\n"+
				"You and Dave escaped and made it home safely.\n\n"+
				"YOU WON");
		}
		else{
			alert("You run back to Dave but one of the clowns\n"+
				"has pinned him to the ground. The other clown\n"+
				"tackles you and brings you to the ground.\n"+
				"You and Dave both struggle and fight to the end\n"+
				"but you were never heard from again.\n\n"+
				"GAME OVER");
		}
	}
	else if(answer === "run"){
		alert("You run to your house and call the police.\n"+
			"The police arrive 10 minutes later, however\n"+
			"there is no trace of Dave or the clowns.\n"+
			"You never heard or saw Dave after that day.\n\n"+
			"GAME OVER");
	}
	else{
		alert("I didn't quite understand that try 'Dave' or 'Run'.");
		questionOneOneTwo();
	};
};

function questionOneOneOneOne(){
	alert("As you and Dave both sit rested against\n"+
		"your trees, you suddenly hear rushed footsteps as a third clown\n"+
		"grabs Dave. You hear Dave cry for help\n"+
		"Dave: \n"+//insert Daves help here
		"As you try to stand to do something the other clowns\n"+
		"appear and you and Dave are never heard from again.\n\n"+
		"GAME OVER");
};

function questionOneOneOneTwo(){
	alert("You notion to Dave to make a run for it.\n"+
		"You both take off with full force and sprint\n"+
		"to the edge of the woods. The whole way you can\n"+
		"hear the footsteps chasing you in the distance.\n"+
		"You and Dave quickly get to your house and call\n"+
		"the police.\n\n"+
		"YOU WON");
};

function questionOneTwo(){
	var answer = prompt("You and Dave call an Uber you are both\n"+
		"really starting to feel the effects of everything\n"+
		"you did this evening. About 10 minutes later a blue van\n"+
		"comes down the street and parks nearby. Assuming this\n"+
		"must be the Uber you both walk up to the van. A man\n"+
		"in his 40's rolls down the window and asks if he can help\n"+
		"Dave replies 'Yeah we're the ones who ordered the ride'\n"+
		"the man paused for a moment then said 'Hop in.'\n"+
		"You give him the address and he begins driving.\n"+
		"Dave drank a lot more than you so he fell asleep within\n"+
		"the first 5 minutes of the drive. You stay awake and try\n"+
		"to make small talk with the driver but you can tell he\n"+
		"doesn't want to talk. Eventually you too fall asleep.\n"+
		"You awake to Dave practically yelling at the guy to pull\n"+
		"over as he's going to be sick. The man seemed reluctant\n"+
		"until Dave threw up on him. Dave got out and went to the edge\n"+
		"of the road, beyond it was forest. You go with him as you too could\n"+
		"use some air. When you get next to Dave he says 'Look where we are'\n"+
		"you look around then Dave says this is atleast 30 minutes in the\n"+
		"opposite direction. You can either go back to the car or\n"+
		"notion to Dave to run into the woods.\n\n"+
		"Enter your choice: 'car' or 'woods'.").toLowerCase();
	if(answer === "car"){
		alert("You head back towards the car, Dave refuses to go with you.\n"+
			"When you arrive you tell the man that your friend is too sick\n"+
			"and you think it would be best to just walk with him home.\n"+
			"The man looks at Dave then you, and asks you to get Dave's coat\n"+
			"from the back. When you get in to grab the coat the man locks the\n"+
			"doors and speeds off. You're never heard from again.\n\n"+
			"GAME OVER");
	}
	else if(answer === "woods"){
		questionOneTwoOne();
	}
	else{
		alert("I didn't quite understand that try 'car' or 'woods'.");
		questionOneTwo();
	};
};

function questionOneTwoOne(){
	var answer = prompt("You and Dave run into the woods a little\n"+
		"ways then hide behind a bush. The man eventually gets impatient\n"+
		"and goes into the woods after you. He scans over the bush you're\n"+
		"hiding behind a couple times before going deeper into the woods.\n"+
		"You quietly whisper with Dave and decide you should either\n"+
		"run back to the road to look for help or stay hidden.\n\n"+
		"Enter your choice: 'hide' or 'road'.").toLowerCase();
	if(answer === "hide"){
		alert("You and Dave remain hidden, after about 15 minutes\n"+
			"a car pulls up behind the van and two men get out. \n"+
			"The men wander into the woods with flashlights, one of\n"+
			"them spots you both and calls for the rest. They knocked you\n"+
			"and Dave unconcious with flashlights. Neither of you were\n"+
			"heard from again.\n\n"+
			"GAME OVER");
	}
	else if(answer === "road"){
		alert("You both run to the road and run out in front of a\n"+
			"passing car to get it to stop. You frantically beg them for a ride\n"+
			"they reluctantly agree. You get in and tell them the story.\n"+
			"They feel so bad for you both that they drive you home safely.\n\n"+
			"YOU WON");
	}
	else{
		alert("I didn't quite understand that try 'hide' or 'road'.");
		questionOneTwoOne();
	};
};
