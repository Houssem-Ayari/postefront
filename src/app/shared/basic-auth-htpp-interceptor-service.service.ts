import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import  {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorServiceService implements HttpInterceptor {

  constructor() { }
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      })
    }

    return next.handle(req);
    
    
    throw new Error("Method not implemented.");
  }
}
