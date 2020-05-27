import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Destination } from './destination';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  url = 'http://localhost:8081/api/Destination';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  

  constructor(private _httpService: HttpClient) { }

  getAll(): Observable<Destination[]>{
    return this._httpService.get<Destination[]>(this.url);
  }

   getById(id: number):Observable<Destination> {  
    return this._httpService.get<Destination>(this.url +'/'+id);  
  }  

  create(des: Destination): Observable<Destination> {  
    
    return this._httpService.post<Destination>(this.url , des, this.httpOptions);  
  }  

  update(des: Destination): Observable<Destination> {  
    return this._httpService.put<Destination>(this.url , des, this.httpOptions);  
  }
 
  deleteById(id: number): Observable<number> {  
    return this._httpService.delete<number>(this.url+'/'+id,  this.httpOptions);  
  }  
}
