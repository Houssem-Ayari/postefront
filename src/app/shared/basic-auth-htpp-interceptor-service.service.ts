import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import  {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorServiceService implements HttpInterceptor {
  constructor() { }
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    let token2="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5MDAyNDE2OSwiaWF0IjoxNTg5OTg4MTY5fQ.DPdCRBqB_Fyf_bF858egAluo4JXnwZHuPfFVJ8uxw2k";

    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      })
    }
    req = req.clone({
      setHeaders: {
        Authorization: sessionStorage.getItem('token2')
      }
    })
    return next.handle(req);
    
    
    throw new Error("Method not implemented.");
  }
}
