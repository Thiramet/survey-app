import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Circle4Page }from'../circle4/circle4';


@IonicPage()
@Component({
  selector: 'page-circle3',
  templateUrl: 'circle3.html',
})
export class Circle3Page {
  public d: number=0;
  public m: number=0;
  public s: number=0;
  public l3: number=0;
  public dec3: number=0;
  public decB: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle3Page');
  }
  calDecimal(){
    this.dec3 =Number (this.d)+Number(this.m/60)+Number(this.s/60/60);

    console.log(this.dec3);}

  GoCircle4(){
    this.navCtrl.push( Circle4Page );
  }

}
