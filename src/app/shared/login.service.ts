import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Login } from './login';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8081/authenticate2';
  constructor(private _httpService: HttpClient) { }

  loginadmin(l:Login){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    
    return this._httpService.post(this.url,l,{responseType: 'text'}).pipe(
      
      catchError(this.handleError)
  );; 
    
  }

  loginadmin2(l:Login){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    
    return this._httpService.post<User>(this.url,l,httpOptions).pipe(
      map(userData => {
        sessionStorage.setItem('username',userData.userName);
        let tokenStr= 'Bearer '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
      }),
      catchError(this.handleError)
  );; 
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token')
  }
  test(){
    
    return this._httpService.get('http://localhost:8081/welcome',{responseType: 'text'}); 
  }

  

handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    if(error.status == 500){window.alert("invalis username or password");}
    console.log(errorMessage);
    
    return throwError(errorMessage);
}

}
