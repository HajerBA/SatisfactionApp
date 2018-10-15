import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  [x: string]: any;
  url='http://satisfactionsurveyapi.azurewebsites.net/api/FormulaireApi';
 //id=Sondage.id;
  constructor(private http: HttpClient) { 
   
  }
  //allforms
  getAllForms(): Observable<Object>{ 

    const httpOptions={

      headers:new HttpHeaders({'Content-Type': 'application/json'})
    };
      return this.http.get<Object>('http://satisfactionsurveyapi.azurewebsites.net/api/FormulaireApi/');

  }
//formsbyId
 getFormById(id : number): Observable<Object>
  { 
  const httpOptions={

    headers:new HttpHeaders({'Content-Type': 'application/json'})
     };

    return this.http.get<Object>('http://satisfactionsurveyapi.azurewebsites.net/api/FormulaireApi/'+id);

        
    }
  
   

  addRep(data: Response) : Observable<any> {
    return this.http.post('http://satisfactionsurveyapi.azurewebsites.net/api/FormulaireApi/', JSON.stringify(data));


  }
  getAllStat(id : number): Observable<Object>
  { 
    
  const httpOptions={

    headers:new HttpHeaders({'Content-Type': 'application/json'})
     };

     console.log(id);
    return this.http.get<Object>(`http://satisfactionsurveyapi.azurewebsites.net/api/StatistiqueApi/${id}`);
   
   
    }
}



