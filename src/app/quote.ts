export class Quote {
    // showdescription: boolean;

    // public id: number;
    // public name: string;
    // public description: string;
    // public author: string;
    // public submittedby: string;
   public showDescription: boolean;
    constructor(public id: number,public name: string,public description: string,public author: string,public submittedby: string, public completeDate: Date){
        this.showDescription=false;
    }

}

    // {
    //     this.showDescription=false;
    // }
