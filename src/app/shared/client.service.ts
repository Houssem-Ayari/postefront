import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Client } from './client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = 'http://localhost:8081/api/Client';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  

  constructor(private _httpService: HttpClient) { }

  getAll(): Observable<Client[]>{
    return this._httpService.get<Client[]>(this.url);
  }

   getById(id: number):Observable<Client> {  
    return this._httpService.get<Client>(this.url +'/'+id);  
  }  

  create(des: Client): Observable<Client> {  
    
    return this._httpService.post<Client>(this.url , des, this.httpOptions);  
  }  

  update(des: Client): Observable<Client> {  
    return this._httpService.put<Client>(this.url , des, this.httpOptions);  
  }
 
  deleteById(id: number): Observable<number> {  
    return this._httpService.delete<number>(this.url+'/'+id,  this.httpOptions);  
  }  

}
