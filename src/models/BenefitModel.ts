export class BenefitModel {

    constructor(public name: string,
      public type: string,
      public imageName: string,
      public shortDescription:string){
      this.name = name;
      this.type = type;
      this.imageName = imageName;
      this.shortDescription = shortDescription;
    }
}
