import { Component, OnInit } from '@angular/core';
import { Destination } from '../shared/destination';
import { Intervale } from '../shared/intervale';
import { TarifInt } from '../shared/tarif-int';
import { DestinationService } from '../shared/destination.service';
import { IntervaleService } from '../shared/intervale.service';
import { TarifIntService } from '../shared/tarif-int.service';

@Component({
  selector: 'app-tarif-int',
  templateUrl: './tarif-int.component.html',
  styleUrls: ['./tarif-int.component.css']
})
export class TarifIntComponent implements OnInit {
  allDes:Destination[];
  allInt:Intervale[];
  tarifint=new TarifInt();

  constructor(private destService : DestinationService, private interService : IntervaleService, private tarifintService:TarifIntService) { }

  ngOnInit(): void {
    this.loadAll();
  }
  loadAll():void {  
    this.destService.getAll()
    .subscribe((data)=> {
        this.allDes = data,
        console.log(data)
    });

    this.interService.getAll()
    .subscribe((data)=> {
        this.allInt = data,
        console.log(data)
    });
  }

  save():void{
    this.tarifint.id.destinationid=this.tarifint.intervale.id;
    this.tarifint.id.intervaleid=this.tarifint.destination.id;
    console.log(this.tarifint);
    this.tarifintService.create(this.tarifint).subscribe( data => {
      console.log("ok");
    });
  }

}
