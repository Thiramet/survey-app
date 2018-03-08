import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provider } from '../../providers/provider/provider';

@Injectable()
export class ClearArreyProvider {
  public obD: any;
  public obM: any;
  public obS: any;
  public azmD: any;
  public azmM: any;
  public azmS: any;
  public dist : any;
  public n : any;
  public e : any;

  

  constructor(
    public http: HttpClient,
    public provider: Provider) {

    this.obD = this.provider.getobD();
    this.obM = this.provider.getobM();
    this.obS = this.provider.getobS();
    this.azmD = this.provider.getazmD();
    this.azmM = this.provider.getazmM();
    this.azmS = this.provider.getazmS();
    this.dist = this.provider.getdist();
    this.n = this.provider.getn();
    this.e = this.provider.gete();
   
  }

  clear2Arrey(){
    this.obD.length = 0;
    this.obM.length = 0;
    this.obS.length = 0;
    this.azmD.length = 0;
    this.azmM.length = 0;
    this.azmS.length = 0;
    this.dist.length = 0;
    this.n.length = 0;
    this.e.length =0;


  }




}
