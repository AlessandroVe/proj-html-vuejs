new Vue({
    el: '#jumbo-slide',
    data:{
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