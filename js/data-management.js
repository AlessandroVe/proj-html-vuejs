new Vue({
    el: '#container-master',
    data:{
        ArrayWishList:[],
        ArrayOfNewItem:[
            {
                name:"Uova biologiche ",
                cost:3.99,
                image:"uova_biologiche.jpg",
                rate:4,
            },
            {
                name:"Pane integrale",
                cost:2.99,
                image:"pane_integrale.jpg",
                rate:4,
            },
            {
                name:"Riso basmati ",
                cost:1.99,
                image:"riso_basmati.jpg",
                rate:4,
            },
            {
                name:"Patata novella",
                cost:3.19,
                image:"patata_novella.jpg",
                rate:4, 
            },
        ],
        ArrayOfDiscountedProducts:[
            {
                name:"Anguria",
                cost:10.99,
                image:"anguria.jpg",
                rate:4,
            },
            {
                name:"Polpa di pomodoro",
                cost:1.50,
                image:"polpa_di_pomodoro.jpg",
                rate:3,
            },
            {
                name:"Arance",
                cost:1.70,
                image:"arance.jpg",
                rate:4,
            },
            {
                name:"Lenticchie",
                cost:1.00,
                image:"lenticchie.jpg",
                rate:4, 
            },
        ],
        ArrayOfPopularItem:[
            {
                name:"Banana",
                cost:1.99,
                image:"banana.jpg",
                rate:4,
            },
            {
                name:"Cipolla",
                cost:0.85,
                image:"cipolla.jpg",
                rate:3,
            },
            {
                name:"Toast",
                cost:2.30,
                image:"toast.jpg",
                rate:4,
            },
            {
                name:"Polpa di pomodoro",
                cost:1.50,
                image:"polpa_di_pomodoro.jpg",
                rate:3,
            },
        ],
        ArrayOfTopRatedItem:[
            {
                name:"Banana",
                cost:1.99,
                image:"banana.jpg",
                rate:4,
            },
            {
                name:"Cipolla",
                cost:0.85,
                image:"cipolla.jpg",
                rate:3,
            },
            {
                name:"Mela",
                cost:2.50,
                image:"mela.jpg",
                rate:3.5,
            },
            {
                name:"Carota",
                cost:2.50,
                image:"carota.jpg",
                rate:4,
            },
            

        

        ],
        imgArray:[/* mi serve un array di immmagini  dove poter ciclare  */
            "agricoltura.jpg",
            "Agroecologia.jpg",
    
        ],
        pictureIndex:0,  /* mi serve per poter selezionare i diversi item dell'array */
    
    },
    created: function () {
        this.timer()
    },
    methods:{
        AddToWishList:function(elementoOfArray){
            if(!this.ArrayWishList.includes(elementoOfArray)){
                if(this.ArrayWishList.length < 4){
                    this.ArrayWishList.push(elementoOfArray)
                }
            }
        },
        RemoveToWishList:function(indexOfElement){
            this.ArrayWishList.splice(indexOfElement,1)
        },

        
        timer:function(){/* dopo ogni tot si deve avviare  la funzione snext() */
            this.intervalSlot = setInterval(() => {
                this.next();
            }, 5000);
    
        },
        next : function(){/* mi serve una funzione che aumenti di 1 il pictureIndex , pero' quando arriva al massimo all'index corrispondente all'ultimo item il contatore torna a zero */
            if(this.pictureIndex===(this.imgArray.length-1)){
                this.pictureIndex=0 
            }else{
                this.pictureIndex++
            }
            clearInterval(this.intervalSlot);
            this.timer();
        },
        prev : function(){/* mi serve una funzione opposta a next */
              if(this.pictureIndex===0){
                  this.pictureIndex=this.imgArray.length-1
              }else {
                this.pictureIndex--
              }
            clearInterval(this.intervalSlot);
            this.timer();
        },
        selectImg:function(index){
            this.pictureIndex = index
            clearInterval(this.intervalSlot);
            this.timer();
        },
        isCurrentImage:function(index){
            if(index === this.pictureIndex){
                return "current"
            }else{
                return ""
            }
        },
    },  
  })