const MyApp = {
    data(){
        return {
            message: "Mon message",
            name:"Johnny",
            age:18,
            test:true
        }          
    },

    mounted() {
        setTimeout(() => {
            this.message ="salut";
        }, 2000); 
    },
    
    methods: {
        sayHello() {
            this.message = "Hello !";
            this.test=true;
        },

        sayGoodBye() {
            this.message = "GoodBye !"
            this.test= false;
        }
    }
}

Vue.createApp(MyApp).mount("#myApp");

aa.addEventListener('click', () =>{})