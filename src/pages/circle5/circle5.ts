import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Circle6Page } from'../circle6/circle6';


@IonicPage()
@Component({
  selector: 'page-circle5',
  templateUrl: 'circle5.html',
})
export class Circle5Page {
  public d: number=0;
  public m: number=0;
  public s: number=0;
  public l5: number=0;
  public dec5: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle5Page');
  }

  calDecimal(){
    this.dec5 =Number (this.d)+Number(this.m/60)+Number(this.s/60/60);

    console.log(this.dec5);
  }

  
  GoCircle6(){
    this.navCtrl.push( Circle6Page );
  }

}
