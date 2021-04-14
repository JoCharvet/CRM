import { Bakery } from "./models/bakery.js";

const myBaker = {

    data() {
        return {
            bakery: new Bakery(),
            idTimer: 0,
            running: true

        }

    },

    mounted()  {
        setInterval(() => {
            if(this.running && this.bakery.running)  {
                if (!this.bakery.update()) {
                    this.running = false;
                    if(confirm("Vous avez perdu \nSouhaitez-vous recommencer ?")){
                        document.location.reload();
                    }
                    else{
                        document.location.href = "//www.google.com";
                    }
                    //alert('Game Over!');
                }
            }

        }, 1000);
    },

    methods: {
        startStop: function () {
            this.bakery.running = !this.bakery.running;
        },

        levelUp: function () {
            if (!this.bakery.levelUp()) {
                prompt('Pas assez d\'or');
            }
        },

        buyMill: function () {
            if (!this.bakery.buyMill()) {
                prompt('Pas assez d\'or');
            }
        }
    }
}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
