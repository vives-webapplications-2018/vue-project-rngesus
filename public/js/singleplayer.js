var app = new Vue({
    el: "#gameApp",
    data: function () {
        return {
            userPick: null,
            randPick: null,
            userScore: 0,
            computerScore: 0
        };
    },
    methods: {
        choose: function (pick) {
            this.userPick = pick;
            const picks = ['rock', 'paper', 'scissors'];
            this.randPick = picks[Math.floor(Math.random() * picks.length)];
            this.setScore();
        },
        setScore: function () {
            if (this.userPick === 'rock') {
                if (this.randPick === 'paper') {
                    this.computerScore++;
                } else if (this.randPick === 'scissors') {
                    this.userScore++;
                } else {
                }
            } else if (this.userPick === 'paper') {
                if (this.randPick === 'rock') {
                    this.userScore++;
                } else if (this.randPick === 'scissors') {
                    this.computerScore++;
                } else {
                 
                }
            } else {
                if (this.randPick === 'rock') {
                    this.computerScore++;
                } else if (this.randPick === 'paper') {
                    this.userScore++;
                } else {
                
                }
            }
        }
    }
});
