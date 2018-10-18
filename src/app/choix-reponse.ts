export class ChoixReponse {
    id:number;
     idSondage? :number;
     idReponse?:number;
     contenu:string;
     constructor() {
        
        this.id = 0;
        this.idReponse = 0;
        this.idSondage = 0;
        this.contenu='';
        
    }
}
