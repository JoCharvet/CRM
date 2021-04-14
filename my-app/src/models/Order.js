class OrderState 
{
    static EMPTY = 0;
    static PENDING = 1;
    static CANCELLED = 2;
    static ACCEPTED = 3;
    static DONE = 4;
}


class Order 
{
    static  idCount = 0;

    constructor()
    {
        this.id = 0;
        this.baguettes = 0;
        this.unitPrice = 0;
        this.totalPrice=0;
        this.timeLeft = 0;
        this.state = OrderState.EMPTY;
    }
    static getRandomInt(min, max) 
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    changeOrder(bakeryLevel ) {

        this.id= ++Order.idCount;

        this.baguettes = Order.getRandomInt(5 ,bakeryLevel* 30) ;
        

        this.unitPrice = Order.getRandomInt((bakeryLevel ),(30*bakeryLevel))/100;

        this.totalPrice = Math.round(this.unitPrice*this.baguettes*100)/100;

        this.timeLeft =Order.getRandomInt(10 ,60);

        this.state= OrderState.PENDING;
    }


}

export { OrderState, Order };