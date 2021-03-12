class Boulangerie
{
    constructor(){
        this.open=false;

        this.level=1;
        this.mills=1;

        this.gold=0;
        this.gold_Spend=0;
        this.gold_Total=0;

        this.flour=0;
        this.flour_Total=0;

        this.baguettes=0;
        this.baguettes_Total=0;
    }

    start(){
        setInterval(() =>{
            this.floor= this.mills*1;
            this.flour_Total+= this.mills*1;
        } ,1000);
    }

    ajouter_Mills(){
        
        this.mills++;
    }
}