class Car{
    constructor(model,year){
        this.model=model;
        this.year=year;
    }
    CarData(){
        return `${this.model}:${this.year}`
    }
}


module.exports=Car

