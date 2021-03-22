class Commandes{
    // le nombre de baguette et leurs sont genere aleatoirement a partir du niveau de la boulangerie 
    constructor(bakery_level,id){
        this.id=id;
        this.etat="En attente...";
        this.nb_baguettes_command= Math.random() *( 30*bakery_level - 5+1)+5;
        this.price_baguette=Math.random()*(((30*bakery_level)/100)-(bakery_level/100));
        this.reward=this.nb_baguettes_command*this.price_baguette;
        this.timer_to_accept=Math.floor(Math.random()*10)+1;
        this.timer_to_finish=90;
        
    }
    
        
    
    /*commandes_sample(){
        let com_Sample=new Commandes();
        com_Sample.id=0;
        com_Sample.nb_baguettes_command=0;
        com_Sample.price_baguette=0;
        com_Sample.reward=0;
        com_Sample.timer_to_accept=0;
        com_Sample.timer_to_finish=0;
        return com_Sample;
    }
    

    commmande_tab(){
        let com=[];
        for(let i =0;i<10;i++){
            com.push(this.commandes_sample());
        }
        return com;
    }*/
    
    

}


export { Commandes }