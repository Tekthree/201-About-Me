'use strict'

//greeting
alert('What is up, my name is Tek');
var username = prompt ('Thanks for stoping by, what\'s your name');
//console.log('the user\'s name is ' + username);
alert('I was so bored, thrilled to have you with me ' + username);

//asking if they want to play a game
var guessingGame = prompt('You down to play a guessing game ' + username + '. Let\'s go');
if (guessingGame.toLowerCase() === 'yes' || guessingGame.toLowerCase() === 'y'){
    alert ('sweet let\'s go. I\'ll ask some questions and you can answer (yes) or (no)');
    
} else { 
    alert('Snap, we can try some other time');
}


// Was my last Job a Clown in a Traveling Circus 
var lastJob = prompt('Was my last Job a Clown in a Traveling Circus');
if(lastJob.toLowerCase() === 'no' || lastJob.toLowerCase() === 'n') {
    // console.log('correct');
    alert ('Lol, tried to get you but you kept your head on the ground, good work');
} else { 
    // console.log('wrong');
    alert('You thought I was a Clown? Interesting');

}

// Did i go to shool in Japan
var schoolJapan = prompt('Do you think I went to school in Japan?');
if (schoolJapan.toLowerCase() === 'yes' || schoolJapan.toLowerCase() === 'y'){
    // console.log('correct');
    alert ('Yep, My dad was in the military as well, we moved there freshman year');
    
} else { 
    // console.log('wrong');
    alert('It\'s crazy but I was there');

}

// Did I move to Thailand at some point
var movedThailand = prompt('Did I move to Thailand at some point');
if(movedThailand.toLowerCase() === 'yes' || movedThailand.toLowerCase() === 'y') {
    // console.log('correct');
    alert ('Your right, I moved soon as I got out of the Air Force');
} else { 
    // console.log('wrong');
    alert('Wrong, I was there for 2 years, right after the military');

}
// Is one of my goals to sky dive off the Seattle space needle
var myGoal = prompt('Is one of my goals to sky dive off the Seattle space needle');
if(myGoal.toLowerCase() === 'no' || myGoal.toLowerCase() === 'n') {
    // console.log('correct');
    alert ('Nice, your pay attention');
} else { 
    // console.log('wrong');
    alert('Dang, you must think I\'m crazy, WoW');

}

//Thanks for playing
alert('Well that was fun ' + username + '. Thanks for hangin with me');
