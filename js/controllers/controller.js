var name = "";

function newGame(){
	giveName();
	questionOne();
};

function giveName(){
	name = prompt("Enter your name: ");
};

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
		"Dave: " + name + dave.callHelp() + "\n" +
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
		"Dave: " + name + dave.callHelp() + "\n" +
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

function questionOneThree(){
	var answer = prompt("You and Dave decide to walk the long\n"+
		"way back to your house. About half way into your walk\n"+
		"you pass the old abandoned house. You keep walking\n"+
		"but Dave stops and stares at the top floor window.\n"+
		"Dave says,'Hey wait a minute I saw an outline of\n"+
		"a head in the window.' You tell him he's seeing\n"+
		"things. He insists he saw something and asks\n"+
		"if you want to explore the house. You\n"+
		"want to continue home but know he will\n"+
		"tease you forever otherwise. \n"+
		"Dave starts to tease you: " + dave.callTaunt() + "\n\n"+
		"Enter your choice: 'explore' or 'walk'.").toLowerCase();
	if(answer === 'explore'){
		questionOneThreeOne();
	}
	else if(answer === 'walk'){
		questionOneThreeTwo();
	}
	else{
		alert("I didn't quite understand that try 'explore' or 'walk'.");
		questionOneThree();
	};
};

function questionOneThreeOne(){
	var answer = prompt("You and Dave enter the backyard of\n"+
		"the house. You try the backdoor but it is locked.\n"+
		"There's a window that is cracked though and you\n"+
		"push it open and enter the house. You and Dave\n"+
		"scan the ground floor and find it is completely\n"+
		"empty aside from some trash on the floor. Dave\n"+
		"tells you he wants to explore the basement.\n"+
		"You start to get a bad feeling about this \n"+
		"and know this might be your only chance to\n"+
		"leave.\n\n"+
		"Enter your choice: 'leave' or 'basement'.").toLowerCase();
	if(answer === 'leave'){
		alert("You tell Dave you've seen enough and\n"+
			"both leave the house the way you entered.\n"+
			"Dave teases you anyways: " + dave.callTaunt());
		questionOneThreeTwo();
	}
	else if(answer === 'basement'){
		questionOneThreeOneOne();
	}
	else{
		alert("I didn't quite catch that try 'leave' or 'basement'.");
		questionOneThreeOne();
	};
};

function questionOneThreeTwo(){
	var answer = prompt("You keep walking down the road toward\n"+
		"your house. After a few moments Dave says,'Hey, did you\n"+
		"hear that?' You reply,'Hear what?' Dave then\n"+
		"explains he heard what sounded like a door creak\n"+
		"open then slam closed in the distance. You tell him\n"+
		"he's hearing things and keep walking. A few minutes\n"+
		"later you hear footsteps coming from behind you.\n"+
		"You both turn to see a woman standing about 30 feet\n"+
		"behind you. She looks away as you look at her.\n"+
		"The next few minutes you realize as you walk,\n"+
		"she walks, and when you stop, she stops.\n"+
		"Dave decides he's had enough of this you both\n"+
		"turn to confront the lady. When you turn you\n"+
		"find her standing much closer than before.\n"+
		"This time instead of her avoiding eye contact\n"+
		"she stares intently at you. Then a creepy\n"+
		"smile grows across her face. You then look to see\n"+
		"a large man lunge from behind a bush and\n"+
		"grab Dave.\n"+
		"Dave: " + name + dave.callHelp() + "\n" +
		"Your house is only a short ways\n"+
		"away from here you could run and call for help\n"+
		"or attempt to fight off the attacker.\n\n"+
		"Enter your choice: 'run' or 'fight'.").toLowerCase();
	if(answer === 'run'){
		alert("You run back to your house and call the\n"+
				"police. They arrive and find no trace of Dave\n"+
				"or the two people. You tell them of the house\n"+
				"they investigate the house and find nothing.\n"+
				"You never heard from or saw Dave again.");
	}
	else if(answer === 'fight'){
		var survival = Math.floor((Math.random() * 2) + 1);
		if(survival === 1){
			alert("You jump on the mans back and begin\n"+
				"flailing your arms smacking his face until\n"+
				"he releases Dave. You slide off his back\n"+
				"and help Dave to his feet. The man charges\n"+
				"you but Dave punches him causing him to\n"+
				"stumble back and to the ground.\n"+
				"The woman screams and the two of you run\n"+
				"the final distance to your house. You call\n"+
				"the police and they find the two, hiding\n"+
				"in a bush across from your house. They were\n"+
				"arrested.\n\n"+
				"YOU WON");
		}
		else{
			alert("You try to fight the man but the woman\n"+
				"tackles you to the ground. She keeps clawing\n"+
				"at your face and aggressively hitting you.\n"+
				"You continue to hear Dave screaming for help.\n"+
				"Dave: " + name + dave.callHelp() + "\n" +
				"Eventually Daves screams stop then the man\n"+
				"comes over and helps the woman. The two of you\n"+
				"were never heard from again.\n\n"+
				"GAME OVER");
		};
	}
	else{
		alert("I didn't quite understand that try 'run' or 'fight'.");
		questionOneThreeTwo();
	};
};

function questionOneThreeOneOne(){
	var answer = prompt("You decide to explore the basement\n"+
		"with Dave. You turn on your flashlights and descend\n"+
		"the basement stairs. You scan the basment and find it empty\n"+
		"there's a door on the otherside of the basement though.\n"+
		"Do you explore the door or leave the basement.\n\n"+
		"Enter your choice: 'door' or 'leave'.").toLowerCase();
	if(answer === "door"){
		alert("You enter the other room in the basement.\n"+
			"You find a drain in the middle of the room clogged\n"+
			"with organic material, amongst a sea of red liquid.\n"+
			"You both run up the stairs to find a large man blocking\n"+
			"your way. The two of you were never heard from again.\n\n"+
			"GAME OVER");
	}
	else if(answer === "leave"){
		questionOneThreeOneOneOne();
	}
	else{
		alert("I didn't quite understand that try 'door' or 'leave'.");
		questionOneThreeOneOne();
	};
};

function questionOneThreeOneOneOne(){
	var answer = prompt("You both leave the basement and start\n"+
			"hearing footsteps from the floor above you approaching\n"+
			"the stairs. You quickly run to the backdoor and struggle\n"+
			"to open it. You run out of the house when you hear Dave\n"+
			"scream for help.\n"+
			"Dave: " + name + dave.callHelp() + "\n" +
			"You look back and see a large man is grabbing Dave.\n"+
			"There's a woman standing behind the man staring at you too.\n"+
			"You can run home and call for help or attempt to fight.\n\n"+
			"Enter your choice: 'run' or 'fight'.").toLowerCase();
	if(answer === 'run'){
		alert("You run back to your house and call the\n"+
				"police. They arrive and find no trace of Dave\n"+
				"or the two people. You tell them of the house\n"+
				"they investigate the house and find nothing.\n"+
				"You never heard from or saw Dave again.");
	}
	else if(answer === 'fight'){
		var survival = Math.floor((Math.random() * 2) + 1);
		if(survival === 1){
			alert("You jump on the mans back and begin\n"+
				"flailing your arms smacking his face until\n"+
				"he releases Dave. You slide off his back\n"+
				"and help Dave to his feet. The man charges\n"+
				"you but Dave punches him causing him to\n"+
				"stumble back and to the ground.\n"+
				"The woman screams and the two of you run\n"+
				"the final distance to your house. You call\n"+
				"the police and they find the two, hiding\n"+
				"in a bush across from your house. They were\n"+
				"arrested.\n\n"+
				"YOU WON");
		}
		else{
			alert("You try to fight the man but the woman\n"+
				"tackles you to the ground. She keeps clawing\n"+
				"at your face and aggressively hitting you.\n"+
				"You continue to hear Dave screaming for help.\n"+
				"Dave: " + name + dave.callHelp() + "\n" +
				"Eventually Daves screams stop then the man\n"+
				"comes over and helps the woman. The two of you\n"+
				"were never heard from again.\n\n"+
				"GAME OVER");
		};
	}
	else{
		alert("I didn't quite understand that try 'run' or 'fight'.");
		questionOneThreeOneOneOne();
	};
};

newGame();