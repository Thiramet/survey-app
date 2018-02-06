import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Circle7Page }from'../circle7/circle7';


@IonicPage()
@Component({
  selector: 'page-circle6',
  templateUrl: 'circle6.html',
})
export class Circle6Page {
  public d: number=0;
  public m: number=0;
  public s: number=0;
  public l6: number=0;
  public dec6: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle6Page');
  }
  calDecimal(){
    this.dec6 =Number (this.d)+Number(this.m/60)+Number(this.s/60/60);

    console.log(this.dec6);
  }
  GoCircle7(){
    this.navCtrl.push( Circle7Page );
  }

}
