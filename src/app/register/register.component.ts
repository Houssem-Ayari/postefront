import { Component, OnInit } from '@angular/core';
import { User2 } from '../shared/user2';
import { Client } from '../shared/client';
import { Fournisseur } from '../shared/fournisseur';
import { ClientService } from '../shared/client.service';
import { FournisseurService } from '../shared/fournisseur.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isShow1=true;
  isShow2=true;
  info: any;
  user=new User2();
  Clients:Client[];
  client=new Client();
  Fournisseurs:Fournisseur[];
  fournisseur= new Fournisseur();

  constructor(private clientService : ClientService, private fournService : FournisseurService) { }

  ngOnInit(): void {
    this.loadAllClients();
    this.loadAllFournisseurs();
    
  }
  changeV(info){  
    if(info == "client"){this.isShow1 = false;this.isShow2=true;}
    else{this.isShow1 = true;this.isShow2=false;}

    
    
  }
  addclient():void{
    if(this.client.id==null){
      this.client.user.role="client";
    this.clientService.create(this.client).subscribe( data => {
        console.log("client created successfully.");
        this.loadAllClients();
      });
    }else{
      
        this.clientService.update(this.client).subscribe( data => {
          console.log(data);
        this.loadAllClients();    
        });
      }
 
    }

    editeclient(clientId:number){
      this.clientService.getById(clientId).subscribe((data)=> {
          this.client=data;
          console.log(data);
      });
      
  }

  deleteclient(clientId:number):void{

    this.clientService.deleteById(clientId).subscribe((data)=>
    {
        console.log(data);
        this.loadAllClients();
    });
  
}
/////////////

addfournisseur():void{
  if(this.fournisseur.id==null){
    this.fournisseur.user.role="client";
  this.fournService.create(this.fournisseur).subscribe( data => {
      console.log("fournisseur created successfully.");
      this.loadAllFournisseurs();
    });
  }else{
    
      this.fournService.update(this.fournisseur).subscribe( data => {
        console.log(data);
        this.loadAllFournisseurs();  
      });
    }

  }

  editefournisseur(clientId:number){
    this.fournService.getById(clientId).subscribe((data)=> {
        this.fournisseur=data;
        console.log(data);
        this.loadAllFournisseurs();
    });
    
}

deletefournisseur(clientId:number):void{

  this.fournService.deleteById(clientId).subscribe((data)=>
  {
      console.log(data);
      this.loadAllFournisseurs();
  });

}
    loadAllClients():void {  
      this.clientService.getAll()
      .subscribe((data)=> {
          this.Clients = data,
          console.log(data)
      });
    }

    loadAllFournisseurs():void {  
      this.fournService.getAll()
      .subscribe((data)=> {
          this.Fournisseurs = data,
          console.log(data)
      });
    }


}
