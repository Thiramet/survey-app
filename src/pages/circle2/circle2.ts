import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Circle3Page  }from'../circle3/circle3';


@IonicPage()
@Component({
  selector: 'page-circle2',
  templateUrl: 'circle2.html',
})
export class Circle2Page {
  public d: number=0;
  public m: number=0;
  public s: number=0;
  public l2: number=0;
  public dec2: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle2Page')
  
  }
  calDecimal(){
    this.dec2 =Number (this.d)+Number(this.m/60)+Number(this.s/60/60);

    console.log(this.dec2);
  }

  GoCircle3(){
    this.navCtrl.push( Circle3Page );
  }
  

}
