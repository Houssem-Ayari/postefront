import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fournisseur } from './fournisseur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  url = 'http://localhost:8081/api/Fournisseur';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 

  constructor(private _httpService: HttpClient) { }

  getAll(): Observable<Fournisseur[]>{
    return this._httpService.get<Fournisseur[]>(this.url);
  }

   getById(id: number):Observable<Fournisseur> {  
    return this._httpService.get<Fournisseur>(this.url +'/'+id);  
  }  

  create(des: Fournisseur): Observable<Fournisseur> {  
    
    return this._httpService.post<Fournisseur>(this.url , des, this.httpOptions);  
  }  

  update(des: Fournisseur): Observable<Fournisseur> {  
    return this._httpService.put<Fournisseur>(this.url , des, this.httpOptions);  
  }
 
  deleteById(id: number): Observable<number> {  
    return this._httpService.delete<number>(this.url+'/'+id,  this.httpOptions);  
  }  
}
