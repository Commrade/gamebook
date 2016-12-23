//This will be used to create the antagonists
function Stranger(name) {
	this.name = name;
	this.comments = {};
};

//This will be your friend in the story
var dave = {
	taunts: ["What's the matter too scared?", "Why are you always a baby?", "Big chicken."],
	help: [" please help me!!", " get them off me!!", " don't let them get you too!!"]
};

//pick random help
dave.callHelp = function(){
	var random = Math.floor((Math.random() * 3) + 1);
	if(random === 1){
		return dave.help[0];
	}
	else if(random === 2){
		return dave.help[1];
	}
	else{
		return dave.help[2];
	};
};

//pick random taunt
dave.callTaunt = function(){
	var random = Math.floor((Math.random() * 3) + 1);
	if(random === 1){
		return dave.taunts[0];
	}
	else if(random === 2){
		return dave.taunts[1];
	}
	else {
		return dave.taunts[2];
	};
};