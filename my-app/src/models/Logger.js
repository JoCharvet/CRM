class Logger {
    static logger = null;

    static getLogger (){
        if(Logger.logger == null ){

            Logger.logger = new Logger();       
        }
        return Logger.logger;
    }


    constructor() {

        this.log = [];
    }

    addLog (str) {
        
        let date = new Date();

        this.log.unshift(date.toLocaleTimeString("fr-FR" , { timeZone: "Europe/Paris" })+" "+str);   
    }
}
export { Logger };