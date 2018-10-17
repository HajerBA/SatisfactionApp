import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../api-user.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-stat-id',
  templateUrl: './stat-id.component.html',
  styleUrls: ['./stat-id.component.css']
})
export class StatIdComponent implements OnInit {
  stats: any;
  id:number;
  constructor(private service: ApiUserService,  private route: ActivatedRoute) {  
    const id:number = parseInt(this.route.snapshot.params.id,0);//snpshot : attribu d'active route
    this.id=this.stats.Id;//=this.service.find(id);
    console.log(this.stats);
   }
  

  ngOnInit() {
     // this.id = 1;
     this.service.getAllStat().subscribe(u => {
      this.stats = u;

     console.log(this.stats[0].TauxChoixReponse[0]);
     //let ctx = document.getElementById("myChart").getContext('2d');
     let canvas = <HTMLCanvasElement> document.getElementById("myChart");
      let ctx = canvas.getContext("2d");
     let myChart = new Chart(ctx, {
     type: 'pie',
     data: {
       labels: [this.stats[0].TauxChoixReponse[1].Contenu],
       datasets: [{
         label: '# of Votes',
         data: [this.stats[0].TauxChoixReponse[0].Reponses[0].Taux,this.stats[0].TauxChoixReponse[0].Reponses[1].Taux],
         backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 206, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)',
           'rgba(153, 102, 255, 0.2)',
           'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)',
           'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 1
       }]
     },
     options: {
       scales: {
         yAxes: [{
           ticks: {
             beginAtZero: true
           }
         }]
       }
     }
   });
   });
    }
   
  }
   

 
