import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../api-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ComposantQuestion } from '../entities/composantquestion';
import { Composant } from '../entities/composant';
import { ReponseInterface } from '../entities/reponse';

import { Newsondage } from '../entities/newsondage';

import { ChoixReponse } from '../choix-reponse';

@Component({
  selector: 'app-api-user',
  templateUrl: './api-user.component.html',
  styleUrls: ['./api-user.component.css']
})
export class ApiUserComponent implements OnInit {
  selected;
  selectedRep:ChoixReponse[];
 // ChoixReponse:Array<Object>;
  idf: any;
  composants: Composant[];
  typeQuestion: Number;
  question: ComposantQuestion;
  reponses: ReponseInterface[];
  sondages: any;
  age?: number;
  sex?: boolean;
  localisation?: string;
   SelectedQ: Composant;
  
  constructor(private service: ApiUserService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getAllUser().subscribe(u => {
      this.sondages = u
    });
  }
  sondageChange(id) {
    console.log(id, 'id');
    
    this.idf = id;
    this.selected = id;
    this.service.getAllQ(id).subscribe(q => {
      this.composants = q.Composant;
     
      console.log(this.composants);
    });
  }
  reponsChange(event){
    console.log(event);
  }

  
 /* questionChange(question: Composant) {
    this.SelectedQ = question;
    this.question = question.Question;
    this.reponses = question.Question.Reponse;
    this.typeQuestion = question.idTypeReponse;
  
    console.log("this.SelectedQ" + this.SelectedQ);
    console.log("this.reponses" + this.reponses);
    console.log("this.typeQuestion" + this.typeQuestion);
       

  }*/
 

  onSubmit(event): void {
    
     /* this.reponses.forEach(element => {
      let cr =  new ChoixReponse();
      cr.contenu = element.contenu;
      console.log("cr" + cr);
      
      this.selectedRep.push(cr);
    });*/
    console.log(this.selectedRep);
  
    let newSondage:Newsondage = {
      Date: new Date(),
      idFormulaire:this.selected,
      ChoixReponse: this.selectedRep,
      Sonde: {
       
      }

    }
    console.log(newSondage);
    this.service.addSondage(newSondage).subscribe(value => {
      console.log("value after post",value);
      
    })
    

  }

}