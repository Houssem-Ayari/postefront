import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Intervale } from './intervale';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervaleService {
  url = 'http://localhost:8081/api/Intervale';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  

  constructor(private _httpService: HttpClient) { }

  getAll(): Observable<Intervale[]>{
    return this._httpService.get<Intervale[]>(this.url);
  }

   getById(id: number):Observable<Intervale> {  
    return this._httpService.get<Intervale>(this.url +'/'+id);  
  }  

  create(des: Intervale): Observable<Intervale> {  
    
    return this._httpService.post<Intervale>(this.url , des, this.httpOptions);  
  }  

  update(des: Intervale): Observable<Intervale> {  
    return this._httpService.put<Intervale>(this.url , des, this.httpOptions);  
  }
 
  deleteById(id: number): Observable<number> {  
    return this._httpService.delete<number>(this.url+'/'+id,  this.httpOptions);  
  }  
}
