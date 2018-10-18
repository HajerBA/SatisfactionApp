import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUserService } from '../api-user.service';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css']
})
export class FormsListComponent implements OnInit {
  age?: number;
  sex?:boolean;
  localisation?: string;
  constructor(private service: ApiUserService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onSubmit(event): void {
    
    if(this.sex==false){
      console.log("homme");
    } else  {
      console.log("femme");

    }
    Sonde: {
       this.sex,
       this.age,
       this.localisation

    }
  
    }
}
