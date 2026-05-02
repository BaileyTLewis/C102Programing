 function PlayDiceGame(){

            let roll1 = getRandomNumber();

            console.log("roll1 =", roll1);

            let roll2 = getRandomNumber();

            console.log("roll2 =" + roll2);

            let rollsum = roll1 + roll2;

            console.log("rollsum=" + rollsum);

            if (roll1 == roll2 && roll1 % 2 == 0){
                document.getElementById("divMessage").textContent = "Victory!";
            }

            else if(rollsum == 7 || rollsum == 11){


             document.getElementById("divMessage").textContent = "Another loss another defeat";

            }

            else{

                document.getElementById("divMessage").textContent = "It was a tie (pushed)!";
                
            }

            document.getElementById("divRoll1").textContent = "You dice roll 1: "+ roll1;
            document.getElementById("divRoll2").textContent = "You dice roll 2: "+ roll2;
            document.getElementById("divSum").textContent = "sum: " + rollsum;

        }
    

    


        function getRandomNumber(){

            let number = Math.random() * 6;

            number = Math.ceil(number);


            return number;
        }