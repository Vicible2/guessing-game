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
            alert("Awesome! Your number " + theNumber + " was correct. You can be named many things, hungry not being one of them.")
        } else {
            alert("Bummer... You guessed " + theNumber + " and the secret number was " + result + ".")
        }
    });

    function secretNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);  
      }



})();