import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import {HttpClient} from '@angular/common/http';

import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  selected;
  selectedRep;
 
  dateModel: any;
   private loader = false;
	private id = 1;
	private employees : any;
	pollingData: any;
	errors: any; 
  constructor( public http:HttpClient,private router: Router,
    private route: ActivatedRoute) {
   
  	//this.employees.data = [];
		this.loader = true;
		this.pollingData =  interval(5000).pipe(
      switchMap(()  => http.get('//satisfactionsurveyapi.azurewebsites.net/api/FormulaireApi/Formulaire?id='+this.id)),
		map(
			data => {
				this.employees = data; 
				this.loader = false;
				console.log(data);// see console you get output every 5 sec
				this.id = this.id +1;
				//reset page number
				
			},
			error => {
				this.errors = error;
			}
			));
	}
 


    

   ngOnInit(){
    const id: number = parseInt(this.route.snapshot.params.id, 0);
   

	
  }

  

}
