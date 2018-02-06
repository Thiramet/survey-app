import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Circle10Page }from'../circle10/circle10';


@IonicPage()
@Component({
  selector: 'page-circle9',
  templateUrl: 'circle9.html',
})
export class Circle9Page {
  public d: number=0;
  public m: number=0;
  public s: number=0;
  public l9: number=0;
  public dec9: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle9Page');
  }
  calDecimal(){
    this.dec9 =Number (this.d)+Number(this.m/60)+Number(this.s/60/60);

    console.log(this.dec9);
  }

  GoCircle10(){
    this.navCtrl.push( Circle10Page );
  }

}
