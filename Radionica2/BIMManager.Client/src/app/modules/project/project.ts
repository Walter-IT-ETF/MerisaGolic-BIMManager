export class Project{
    name : string; 
    version : number;
    status : string; 
    BIMModels : any[];

    constructor(){
        this.BIMModels = [];
    }
}