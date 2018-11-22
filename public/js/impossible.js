window.onload = function() {
    var app = new Vue({
        el: "#gameAppimp",
        data: function() {
            return {
                userPick: null,
                aiPick: null,
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
                if (this.userPick === 'rock') {
                    this.aiPick = 'paper';
                } else if (this.userPick === 'paper') {
                    this.aiPick = 'scissors';
                } else if (this.userPick = 'scissors'){
                    this.aiPick = 'rock';
                }
                this.setScore();
            },
            setScore: function() {
                if (this.userPick === 'rock') {
                    if (this.aiPick === 'paper') {
                        this.result = "Computer wins";
                        this.computerScore++;
                    } else if (this.aiPick === 'scissors') {
                        this.result = "User wins";
                        this.userScore++;
                    } else {
                        this.result = "Draw";
                    }
                } else if (this.userPick === 'paper') {
                    if (this.aiPick === 'scissors') {
                        this.result = "Computer wins";
                        this.computerScore++;
                    } else if (this.aiPick === 'rock') {
                        this.result = "User wins";
                        this.userScore++;
                    } else {
                        this.result = "Draw";
                    }
                } else if (this.userPick === 'scissors') {
                    if (this.aiPick === 'rock') {
                        this.result = "Computer wins";
                        this.computerScore++;
                    } else if (this.aiPick === 'paper') {
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
                } 
                else {
                    this.winning = "It's a draw";}
                
                if (this.computerScore === 10) {
                    alert("COMPUTER WINS,YOU LOSE!");
                    window.location.href = "/";
                } else if (this.userScore === 10) {
                    alert("CONGRATULTIONS!, You Win");
                    window.location.href = "/";
                }
            }
        }
    });
};