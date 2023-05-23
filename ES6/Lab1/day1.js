//console.log(number1); //cannot access before init
//console.log(number2);cannot access before init
//console.log(number3);//undefined hosting on window f ay 7aga var bttl3 fo2 ttnfz awel 7aga
//console.log(number4);//is not defined


let number1=1;
const number2=2; //not change
var number3=3;
number4=4;

if(true){
   // console.log(number1);//cannot access before init
    //console.log(number2);//cannot access before init
   // console.log(number3);//3
   // console.log(number4);//4
    let number1=10;
    const number2=20;
    var number3=30;
    number4=40;
    console.log(number1);//10
    console.log(number2);//20
    console.log(number3);//30

    console.log(number4);//40
}
    // console.log(number1);//1
    // console.log(number2);//2
    // console.log(number3);//30 hoisting on the window no scope block
    // console.log(number4);//40 no block scope
/////////////////////////////
//getData(10,"mary0");//Cannot access 'getData' before initialization

const getData=function(userid,username){
let x =[...arguments];
    console.log(x);

}

//console.log(userid,username); not defined
getData(10,"mariam");
//console.log(userid,username);not defined

////////////////////////
class Engine{
    static #count=0;
    
    constructor(color){
        this.color=color;
        Engine.#count++;
        if(new.target.name === 'Engine') {thrownewError("This class cannot be instantiated directly.") }

    }
    static get count(){return Engine.#count;}
    move(){console.log("moving");}
}
class Car extends Engine{
  #ownername;
  constructor(oname,brandName,prodYear,color){
    super(color);
    this.#ownername=oname;
    this.brandName=brandName;
    this.prodYear=prodYear;

    this.move = function() {
        console.log(this.#ownername);
        Engine.prototype.move.call(this);
      }
  }
  get oname(){return this.#ownername}
  set oname(value){this.#ownername=c=value}
  //move(){console.log(this.#ownername) + super.move();}
  toString=function(){
   return  this.constructor.name;
  }
}
let car1= new Car("mariam","jeep",2023,red);
let car2= new Car("mary","Merceds",2023,black)

