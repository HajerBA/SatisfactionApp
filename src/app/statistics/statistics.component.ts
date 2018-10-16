import { Component, OnInit} from '@angular/core';

import { ApiUserService } from '../api-user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  stats: any;
  id:number;
  title = 'app';
 
 
  // events on slice click
  public chartClicked(e:any):void {
    console.log(e);
  }
 
 // event on pie chart slice hover
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(private service: ApiUserService,private router: Router,
  private route: ActivatedRoute) { 
  
    
    
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id")); 
    this.service.getAllStat(this.id).subscribe(u => {
      this.stats = u;
    
    }); 
    
    
  }
  public pieChartLabels:string[] = [this.stats.title];
    public pieChartData:number[] = [21, 39, 10, 14, 16];
    public pieChartType:string = 'pie';
    public pieChartOptions:any = {'backgroundColor': [
                 "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#E7E9ED",
              "#36A2EB"
              ]}

}
