import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { Login } from '../shared/login';
import { User } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login= new Login();
  user=new User();
  message="";
  
  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit(): void {
   
  }

  test(){
    this.loginService.test().subscribe(data=> console.log(data))
  }

  loginadmin(){
    console.log(this.login.userName);
    this.loginService.loginadmin(this.login).subscribe(data => {
      let str=data;
      if(data!=null){console.log("login success successfully."+str);
      
      //this.router.navigateByUrl('/admindash');
    }else{
        console.log("login fail .");
        this.router.navigateByUrl('/login');

        this.message="login or password wrong";
      }
      
    }
      );
  }

  loginadmin2(){
    console.log(this.login.userName);
    this.loginService.loginadmin2(this.login).subscribe(data => {
       this.user=data;
       if(this.user!=null){
       console.log(this.user.userName+"\n"+this.user.token);}


       
  
  });
}

}
