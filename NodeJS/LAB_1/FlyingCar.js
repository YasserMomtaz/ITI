const carModule = require("./carModule");
class  FlyingCar extends carModule  {
    constructor( model,year,canFly=true){
        super(model,year);
        this.canFly=canFly;
    }
    CarData(){
        return  `${super.CarData()} , I Can Fly`
    }
}



module.exports=FlyingCar
