new Vue({
    el: '#container-master',
    data:{
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
    },
    created: function () {
       console.log(this.ArrayOfNewItem)
    },
    methods:{
    },  
  })