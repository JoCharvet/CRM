class Order {
    constructor(bakery_level,id) {
       
            this.id=id;
            this.etat="En attente...";
            this.nb_baguettes_command= Math.round(Math.random() *( 30*bakery_level - 5+1)+5);
            this.price_baguette=Math.random()*(((30*bakery_level)/100)-(bakery_level/100));
            this.reward=this.nb_baguettes_command*this.price_baguette;
            this.timer_to_accept=Math.floor(Math.random()*10)+1;
            this.timer_to_finish=90;                    
    }
}