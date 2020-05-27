import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { TarifIntComponent } from './tarif-int/tarif-int.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'admindash', component:AdmindashComponent,
  children:[
    {path:'tarif', component: TarifIntComponent},
    {path:'register', component:RegisterComponent}],  
  },
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
