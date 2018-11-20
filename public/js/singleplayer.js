window.onload = function() {
    var app = new Vue({
        el: "#gameApp",
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
                const picks = ['rock', 'paper', 'scissors'];
                this.randPick = picks[Math.floor(Math.random() * picks.length)];
                this.setScore();
            },
            setScore: function() {
                if (this.userPick === 'rock') {
                    if (this.randPick === 'paper') {
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
            }
        }
    });
};