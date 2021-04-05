// First take a random number from the fokin user
// Genreate a fokin random fokin number


var numOfWin = 0;
var numOfLost = 0;



for (let i = 0; i < 5; i++) {

    var number = parseInt(prompt("Enter a number between 1 - 5: "));

    var randomNumber = Math.floor(Math.random()* 5)+1;
    
    
    if (number===randomNumber) {
        console.log("yes You are fokin right");
        numOfWin++;
    }else{
        console.log("You Foking Bastard You just lost bitch");
        numOfLost++;
    }
    
}


document.write("Numer of time you have foking won "+ numOfWin + "<br>");
document.write("Numer of time you have foking Lost "+ numOfLost);
