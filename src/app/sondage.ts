import { Reponse } from "./Reponse";
import { ChoixReponse } from "./choix-reponse";

export class Sondage {
    
        id : number;
        dat: Date; 
        idFormulaire: number; 
        idSonde : number; 
        Respons:Array<Reponse>;
        ChoixRespons:Array<ChoixReponse>;


       
}
