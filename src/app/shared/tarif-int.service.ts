import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TarifInt } from './tarif-int';

@Injectable({
  providedIn: 'root'
})
export class TarifIntService {

  url = 'http://localhost:8081/api/TarifInt';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 

  constructor(private _httpService: HttpClient) { }

  getAll(): Observable<TarifInt[]>{
    return this._httpService.get<TarifInt[]>(this.url);
  }

   getById(id: number):Observable<TarifInt> {  
    return this._httpService.get<TarifInt>(this.url +'/'+id);  
  }  

  create(des: TarifInt): Observable<TarifInt> {  
    
    return this._httpService.post<TarifInt>(this.url , des, this.httpOptions);  
  }  

  update(des: TarifInt): Observable<TarifInt> {  
    return this._httpService.put<TarifInt>(this.url , des, this.httpOptions);  
  }
 
  deleteById(id: number): Observable<number> {  
    return this._httpService.delete<number>(this.url+'/'+id,  this.httpOptions);  
  }  
}
