window.onload = function() {
    var app = new Vue({
        el: "#gameAppHard",
        data: function() {
            return {
                userPick: null,
                aiPick: null,
                userScore: 0,
                computerScore: 0,
                result: "",
                winning: "",
                chance: 1
            };
        },
        methods: {
            choose: function (pick) {
                this.userPick = pick;
                const picks = ['rock', 'paper', 'scissors'];
                this.aiPick = picks[Math.floor(Math.random() * picks.length)];
                this.setScore();
                this.chance++
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
                if (this.chance % 4 === 0){
                    console.log('Pc wins this time');
                    console.log(this.chance);
                    console.log(this.chance%4);
                    if (this.userPick === 'rock') {
                        this.aiPick = 'paper';
                        this.computerScore++;
                    } else if (this.userPick === 'paper') {
                        this.aiPick = 'scissors';
                        this.computerScore++;
                    } else if (this.userPick = 'scissors'){
                        this.aiPick = 'rock';
                        this.computerScore++;
                    }else{
                        this.userScore++;
                    }
                }
                if (this.computerScore === 10) {
                    alert("COMPUTER WINS,YOU LOSE!");
                    window.location.href = "javascript:javascript:history.go(-1)";
                   
                } else if (this.userScore === 10) {
                    alert("CONGRATULTIONS!, You Win");
                    window.location.href = "javascript:javascript:history.go(-1)";
                }
                if (this.computerScore > this.userScore) {
                    this.winning = "Computer is winning the game with " + this.computerScore + " points";
                } else if (this.computerScore < this.userScore) {
                    this.winning = "user is winning the game with " + this.userScore + " points";
                } else {
                    this.winning = "It's a draw";
                }
            }
        }
    });
};