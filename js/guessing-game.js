(function () {

    document.getElementById("run").addEventListener("click", function (e) {
        e.preventDefault();

        let theNumber = document.getElementById("theNumber").value
        console.log(theNumber);
        //met functie
        let result = secretNumber(1,22);
        //zonder functie
        //let resultwithoutfunct = Math.floor(Math.random() * 21 + 1);
        console.log(result);

        if (theNumber == result) {
            document.body.style.backgroundImage = "url('./../assets/party.jpg')";
            alert("Awesome! Your number " + theNumber + " was correct. You can be named many things, hungry not being one of them.");
        } else if (theNumber > 22 || theNumber < 1 ) {
            document.body.style.backgroundImage = "url('./../assets/bastard.jpg')";
            alert("Please stick to a number between 1 & 22, you cheeky bastard ;)");
        } else if (theNumber < result + 2 && theNumber > result - 2){
            alert("So close, but you just missed it! Are you in a class that started on the thirteenth or what?");

        } 
        else {
            document.body.style.backgroundImage = "url('./../assets/rain.jpg')";
            alert("Bummer... You guessed " + theNumber + " and the secret number was " + result + ".");
        }

       
    });

    function secretNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);  
      }
      


})();