import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Circle9Page }from'../circle9/circle9';

@IonicPage()
@Component({
  selector: 'page-circle8',
  templateUrl: 'circle8.html',
})
export class Circle8Page {
  public d: number=0;
  public m: number=0;
  public s: number=0;
  public l8: number=0;
  public dec8: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle8Page');
  }

  calDecimal(){
    this.dec8 =Number (this.d)+Number(this.m/60)+Number(this.s/60/60);

    console.log(this.dec8);
  }

  GoCircle9(){
    this.navCtrl.push( Circle9Page );
  }

}
