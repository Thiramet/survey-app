//import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';


@Injectable()
export class Provider {

  private arr_obD=[];
  private arr_obM=[];
  private arr_obS=[];
  private arr_azmD =[];
  private arr_azmM =[];
  private arr_azmS =[];
  private arr_dist =[];
  private arr_e=[];
  private arr_n=[];

  constructor(
    //public http: HttpClient
  ) {
    console.log('Hello Provider Provider');
  }

  setobD(value:any){
    this.arr_obD.push(value);
  }

  setobM(value:any){
    this.arr_obM.push(value);
  }

  setobS(value:any){
    this.arr_obS.push(value);
  }

  setazmD(value:any){
    this.arr_azmD.push(value);
  }

  setazmM(value:any){
    this.arr_azmM.push(value);
  }

  setazmS(value:any){
    this.arr_azmS.push(value);

  }

  setdist(value:any){
    this.arr_dist.push(value);
  }

  sete(value:any){
    this.arr_e.push(value);
  }

  setn(value:any){
    this.arr_n.push(value);
  }
  //get function
  getobD(){
    return this.arr_obD;
  }

  getobM(){
    return this.arr_obM;
  }

  getobS(){
    return this.arr_obS;
  }

  getazmD(){
    return this.arr_azmD;
  }
  getazmM(){
    return this.arr_azmM
  }
  getazmS(){
    return this.arr_azmS;
  }
  getdist(){
    return this.arr_dist;
  }
  gete(){
    return this.arr_e;
  }
  getn(){
    return this.arr_n;
  }




}
