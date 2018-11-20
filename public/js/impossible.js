window.onload = function() {
    var app = new Vue({
        el: "#gameAppimp",
        data: function() {
            return {
                userPick: null,
                randPick: null,
                userScore: 0,
                computerScore: 0,
                result: "",
                winning: ""
            };
        },
        methods: {
            choose: function(pick) {
                this.userPick = pick;
                console.log(pick);
                const picks = ['rock', 'paper', 'scissors'];
                if(this.userPick == 'rock'){
                    console.log(pick);
                    this.randPick =='paper';}
                    else if (this.userPick == 'paper'){
                       this.randPick =='scissor';}
                   else{
                       this.randPick =='rock';}

            },
          
            
            

            setScore: function() {
                if (this.userPick === 'rock') {
                    if(this.randPick === 'paper') {
                        this.result = "Computer wins";
                        this.computerScore++;
                    } else if (this.randPick === 'scissors') {
                        this.result = "User wins";
                        this.userScore++;
                    } else {
                        this.result = "Draw";
                    }
                } else if (this.userPick === 'paper') {
                    if (this.randPick === 'rock') {
                        this.result = "User wins";
                        this.userScore++;
                    } else if (this.randPick === 'scissors') {
                        this.result = "Computer wins";
                        this.computerScore++;
                    } else {
                        this.result = "Draw";
                    }
                } else {
                    if (this.randPick === 'rock') {
                        this.result = "Computer wins";
                        this.computerScore++;
                    } else if (this.randPick === 'paper') {
                        this.result = "User wins";
                        this.userScore++;
                    } else {
                        this.result = "Draw";
                    }
                }
                if (this.computerScore > this.userScore) {
                    this.winning = "Computer is winning the game with " + this.computerScore + " points";
                } else if (this.computerScore < this.userScore) {
                    this.winning = "user is winning the game with " + this.userScore + " points";
                } else {
                    this.winning = "It's a draw";
                }
                 if (this.computerScore ==10 ) {
                    alert("COMPUTER WINS,YOU LOSE!");
                    window.location.href = "/";
                }
                     else if (this.userScore ==10 ){
                        alert("CONGRATULTIONS!, You Win");
                        window.location.href = "/"; }
                        else{
                }
            }
        }
    });
};