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
                
			switch(this.userPick, this.randPick){
					case this.userPick === this.randPick:
						this.result = "Draw";
						break;
			
					case this.userPick === 'paper' && this.randPick === 'rock':
					case this.userPick === 'scissors' && this.randPick === 'paper':
					case this.userPIck === 'rock' && this.randPIck === 'scissors':
						this.result = "User wins";
						this.userScore++;
						break;

					default:
						this.result = "Computer wins";
						this.computerScore++;
                }
                
                if (this.computerScore > this.userScore) {
                    this.winning = "Computer is winning the game with " + this.computerScore + " points";
                } else if (this.computerScore < this.userScore) {
                    this.winning = "user is winning the game with " + this.userScore + " points";
                } else {
                    this.winning = "It's a draw";
                }
                if (this.computerScore == 10) {
                    alert("COMPUTER WINS,YOU LOSE!");
                    window.location.href = "/";
                } else if (this.userScore == 10) {
                    alert("Congratulations, You Win!");
                    window.location.href = "/mode";
                } else {}
            }
        }
    });
};
