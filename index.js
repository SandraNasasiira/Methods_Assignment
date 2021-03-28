var Kiosk={
    fruit:"apple",
    get c(){
        return this.fruit;
    },
   set d(newFruit){
       this.fruit=newFruit;
   }

};
console.log(Kiosk.c);
Kiosk.newFruit="orange";
console.log(Kiosk.newFruit);