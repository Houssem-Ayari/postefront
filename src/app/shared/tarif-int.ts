import { Destination } from './destination';
import { Intervale } from './intervale';

export class TarifInt {
      id=new TarifintKey();
      intervale:Intervale;
      destination:Destination; 
      tarif:bigint;
}

export class TarifintKey {

    intervaleid:bigint;
    destinationid:bigint;
        
}
