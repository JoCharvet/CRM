import { Logger } from "./Logger.js";

class Bakery {

    constructor() {

        this.running = false;

        this.level = 1;
        this.level_price = 100;

        this.mills = 1;
        this.mills_price = 80;

        this.golds = 999100;

        this.flour = 50;

        this.baguettes = 0;
        this.totalGoldsEarned = 0;
        this.totalGoldsSpent = 0;
        this.totalFlourProduced = 0;
        this.totalBaguettesProduced = 0;
    }

    update() {
        this.golds -= this.mills * this.level * 0.05;
        this.totalGoldsSpent += this.mills * this.level * 0.05;
        
        this.flour += this.mills;
        this.totalFlourProduced+=this.mills;

        if (this.flour >= this.level + 1) {
            this.flour -= this.level + 1
            this.baguettes += this.level;
            this.totalBaguettesProduced+= this.level;
        }

        return this.golds > 0;
    }

    levelUp() {
        if (this.golds >= this.level_price) {
            this.level++
            this.golds -= this.level_price;
            this.totalGoldsSpent+=this.level_price;
            this.level_price *= 1.5;
            return true;
        }

        return false;
    }

    buyMill() {
        if (this.golds >= this.mills_price) {
            this.mills++
            this.golds -= this.mills_price;
            this.totalGoldsSpent += this.mills_price;
            this.mills_price *= 1.5;
            return true;
        }

        return false;
    }

    earnGold(reward){
        this.golds+=reward;
        this.totalGoldsEarned+=reward;
        Logger.getLogger().addLog("La boulangerie a gagné "+ reward +" Or");

    }

    sendBaguettes(nbBaguettes){
        this.baguettes-=nbBaguettes;

    }





}


export { Bakery };