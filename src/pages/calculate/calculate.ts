import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-calculate',
  templateUrl: 'calculate.html',
})
export class CalculatePage {
  public d: number=0;
  public m: number=0;
  public s: number=0;
  public dec88: number=0;
  public azi: number=0;
  public l: number=0;

  public items=[];
  public sum: number;
  public n2: number;
  public err: number;
  public crr: number;
  public acrr=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatePage');
  }

  calDecimal(){
    this.dec88 =Number (this.d)+Number(this.m/60)+Number(this.s/60/60);
    this.items.push(this.dec88);

    //console.log(this.items);
  }

  clear(){
    this.d=0;
    this.m=0;
    this.s=0;
  }
  
  calConst(){
   this.sum = this.items.reduce((a, b)=> a+b,0);
   this.n2=(Number(this.items.length)-2)*180;
   this.err=Number(this.sum)-Number(this.n2);
   this.crr=Number(this.err)/Number(this.items.length);
  

   this.items.map(function(item, index) {
     console.log(item, index)
    //return item - this.crr;

    console.log(Number(item) - Number(this.crr));
    this.acrr.push(Number(item) - Number(this.crr));
  
  })

  console.log(this.acrr);

    
  }



}
