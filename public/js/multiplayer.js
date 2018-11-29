var app;

window.onload = function() {
    multiplayer();
}

function multiplayer() {
    console.log("hallo");
    app = new Vue({
        el: "#gameAppMulti",
        data: function() {
            return {
                userPick: null,
                opponentPick: null,
                userScore: 0,
                opponentScore: 0,
                result: "",
                winning: "",
                chance: 1
            };
        },
        methods: {
            chooseUser: function(user_pick) {
                console.log("user picked" + user_pick);
                this.userPick = user_pick;
                const picks = ['rock', 'paper', 'scissors'];
                if (user_pick == true) {
                    this.setScore();
                }
            },
            chooseOpponent: function(opponent_pick) {
                console.log("opponent picked" + opponent_pick);
                const picks = ['rock', 'paper', 'scissors'];
                this.opponentPick = opponent_pick;
                if (opponent_pick == true) {
                    this.setScore();
                }
            },
            setScore: function() {
                if (this.userPick === 'rock') {
                    if (this.opponentPick === 'paper') {
                        this.result = "opponent wins";
                        app.userPick = app.userPick + " ";
                        app.opponentPick = app.opponentPick + " ";
                        this.opponentScore++;
                    } else if (this.opponentPick === 'scissors') {
                        this.result = "User wins";
                        app.userPick = app.userPick + " ";
                        app.opponentPick = app.opponentPick + " ";
                        this.userScore++;
                    } else {
                        this.result = "Draw";
                    }
                } else if (this.userPick === 'paper') {
                    if (this.opponentPick === 'scissors') {
                        this.result = "opponent wins";
                        app.userPick = app.userPick + " ";
                        app.opponentPick = app.opponentPick + " ";
                        this.opponentScore++;
                    } else if (this.opponentPick === 'rock') {
                        this.result = "User wins";
                        app.userPick = app.userPick + " ";
                        app.opponentPick = app.opponentPick + " ";
                        this.userScore++;
                    } else {
                        this.result = "Draw";
                    }
                } else if (this.userPick === 'scissors') {
                    if (this.opponentPick === 'rock') {
                        this.result = "opponent wins";
                        app.userPick = app.userPick + " ";
                        app.opponentPick = app.opponentPick + " ";
                        this.opponentScore++;
                    } else if (this.opponentPick === 'paper') {
                        this.result = "User wins";
                        app.userPick = app.userPick + " ";
                        app.opponentPick = app.opponentPick + " ";
                        this.userScore++;
                    } else {
                        this.result = "Draw";
                    }
                }
                if (this.chance % 4 === 0) {
                    console.log('Pc wins this time');
                    console.log(this.chance);
                    console.log(this.chance % 4);
                    if (this.userPick === 'rock') {
                        this.opponentPick = 'paper';
                        this.opponentScore++;
                    } else if (this.userPick === 'paper') {
                        this.opponentPick = 'scissors';
                        this.opponentScore++;
                    } else if (this.userPick = 'scissors') {
                        this.opponentPick = 'rock';
                        this.opponentScore++;
                    } else {
                        this.userScore++;
                    }
                }
                if (this.opponentScore === 10) {
                    alert("Opponent wins,you lose!");
                    location.reload();

                } else if (this.userScore === 10) {
                    alert("CONGRATULTIONS!, You Win");
                    location.reload();
                }
                if (this.opponentScore > this.userScore) {
                    this.winning = "Computer is winning the game with " + this.opponentScore + " points";
                } else if (this.opponentScore < this.userScore) {
                    this.winning = "user is winning the game with " + this.userScore + " points";
                } else {
                    this.winning = "It's a draw";
                }
            }
        }
    })
};