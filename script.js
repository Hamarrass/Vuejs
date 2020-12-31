new Vue({

   el   :'#app',

   data :{
       counter   :1,
       name      :'',
       initNumber:1,
       message   :'',
       varClass  :Boolean,
   },

   methods: {
       inc:function(step){
          this.counter+=step
       },
       dec:function(step){
          this.counter-=step
       },
       add:function(){
          alert('submit a form')
       },
       logName: function(){
         console.log('log my name');
       },
             
     
     },
       /* computed let your fucntion excuted in one more time */
   computed: {
      multiblication :function(){
         console.log('coucou');
         return this.counter * this.initNumber;              
         },
      classObject : function(){ 
             return {"bg-danger": this.varClass , "bg-success": !this.varClass }
           }

   },
   watch: {
      multiblication :function(v){
              if(v>10){
                 this.varClass=true;
                 this.message ='Winner' ;
              }
              else{
                 this.varClass=false;
                 this.message ='Loser';
              }
       }
   }    

});