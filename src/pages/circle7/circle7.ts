import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Circle8Page }from'../circle8/circle8';

@IonicPage()
@Component({
  selector: 'page-circle7',
  templateUrl: 'circle7.html',
})
export class Circle7Page {
  public d: number=0;
  public m: number=0;
  public s: number=0;
  public l7: number=0;
  public dec7: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle7Page');

  }
  calDecimal(){
    this.dec7 =Number (this.d)+Number(this.m/60)+Number(this.s/60/60);

    console.log(this.dec7);}


  GoCircle8(){
    this.navCtrl.push( Circle8Page );
  }

}
