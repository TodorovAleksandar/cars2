export class Cars {
    id:number;
    mark:string;
    model:string;
    year:number;
    maxSpeed:number;
    isAutomatic:string;
    engine:string;
    numberOfDoors:number;

    constructor(id: number, mark: string,model: string, year:number, maxSpeed: number,
        isAutomatic:string, engine: string, numberOfDoors: number){
        this.id = id;
        this.mark = mark;
        this.model = model;
        this. year = year ;
        this.maxSpeed = maxSpeed;
        this.isAutomatic = isAutomatic;
        this.engine = engine;
        this.numberOfDoors = numberOfDoors;
        return this;
    }
}
