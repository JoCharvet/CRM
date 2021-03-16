class Commandes{
    // le nombre de baguette et leurs sont genere aleatoirement a partir du niveau de la boulangerie 
    constructor(bakery_level){

        this.nb_baguettes_command= Math.random() *( 30*bakery_level - 5+1)+5;
        this.price_baguette=Math.random()*(((30*bakery_level)/100)-(bakery_level/100));
        this.accepted=false;
        this.canceled=false;
        this.reward=this.nb_baguettes_command*this.price_baguette;
        this.timer_to_accept=Math.floor(Math.random()*10)+1;
        this.timer_to_finish=90;
        
    }

}
export { Commandes }