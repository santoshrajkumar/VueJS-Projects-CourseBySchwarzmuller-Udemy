new Vue({
    el: "#app",
    data: {
        // intializing the game play data
        playerHealth: 100,
        monsterHealth: 100,
        specialAttackFlag: 0,
        specialAttackEnd: '',
        gameRunning: false,
        gamestats: [],
        playerName: '',
    },

    methods: {
        startNewGame: function(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.specialAttackFlag = 0;
            this.specialAttackEnd = 'You can Use Special Attack';
            this.gameRunning = true;
            this.gamestats = [];
        },
        playerAttack: function(){
            var harm = this.calculateHarm(4, 8);
            this.monsterHealth -= harm;
            if (this.checkWinner()){
                return;
            }

            this.gamestats.unshift({
                isPlayer: true,
                text: this.playerName + " attacks with harm: " + harm
            })
            this.monsterAttack();
            
        },
        monsterAttack: function(){
            var harm = this.calculateHarm(5,10)
            this.playerHealth -= harm;
            if (this.checkWinner()){
                return;
            }

            this.gamestats.unshift({
                isPlayer: false,
                text: "Monster attacks with harm: " + harm
            })

        },
        specialAttack: function(){
            if(this.specialAttackFlag < 3){
                var harm = this.calculateHarm(10,20)
                this.monsterHealth -= harm;

                this.gamestats.unshift({
                    isPlayer: true,
                    text: this.playerName + "'s Special Attack with harm: " + harm
                })

                this.monsterAttack();
                this.specialAttackFlag++;
                
            } 
            
            if (this.specialAttackFlag >= 3) {
                this.specialAttackEnd = 'Your Special Attack Option Ended';
            }
        },

        healAll: function(){
            var healP = this.calculateHeal(5, 10);
            var healM = this.calculateHeal(3, 8);
            if (this.playerHealth <= 90){
                this.playerHealth += healP;

                this.gamestats.unshift({
                    isPlayer: true,
                    text: this.playerName + "  heals with amount: " + healP
                })
            }
            if (this.monsterHealth <= 92){
                this.monsterHealth += healM;
                this.gamestats.unshift({
                    isPlayer: false,
                    text: "Monster heals with amount: " + healM
                })
            }
        },

        calculateHarm: function(min, max) {
            return Math.max(Math.floor(Math.random()*max + 1), min);
        },

        calculateHeal: function(min, max){
            return Math.max(Math.floor(Math.random()*max + 1), min);
        },

        checkWinner: function(){
            if (this.monsterHealth < 0){
                if (confirm('You have won ! New Game ?')){
                    this.startNewGame();
                } else {
                    this.gameRunning = false;
                }
                return true;
            } else if (this.playerHealth < 0){
                if (confirm('You lost to the monster ! New Game ?')){
                    this.startNewGame();
                } else {
                    this.gameRunning =false;
                }
                return true;
            } else {
                return false;
            }
        }

    }
})