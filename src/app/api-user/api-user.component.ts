import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../api-user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-api-user',
  templateUrl: './api-user.component.html',
  styleUrls: ['./api-user.component.css']
})
export class ApiUserComponent implements OnInit {
  selected;
  selectedRep;
  SelectedQ;
  idf:number;
 questions:any;
  sondages: any;
  //Composant : Array<Question>;
  constructor(private service: ApiUserService,private router: Router,
    private route: ActivatedRoute) {
      
     }

  ngOnInit() {
    
    this.service.getAllForms().subscribe(u => {
      this.sondages = u;
    //  this.idf=this.sondages.Composant.id;
      this.sondages.forEach(element => {
        this.idf=element.id;
        
       
     });
    }); 
   
  }
  onSubmit(): void {
 
    
  

    this.router.navigate(['/Statistics']);
    
}

}