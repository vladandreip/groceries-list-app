//model description is default, but good for the description of the file
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name:string, desc:string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}