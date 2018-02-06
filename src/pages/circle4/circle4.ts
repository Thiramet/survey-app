import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Circle5Page }from'../circle5/circle5';


@IonicPage()
@Component({
  selector: 'page-circle4',
  templateUrl: 'circle4.html',
})
export class Circle4Page {
  public d: number=0;
  public m: number=0;
  public s: number=0;
  public l4: number=0;
  public dec4: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle4Page');
  }

  calDecimal(){
    this.dec4 =Number (this.d)+Number(this.m/60)+Number(this.s/60/60);

    console.log(this.dec4);
  }

  GOCircle5(){
    this.navCtrl.push( Circle5Page );
  }

}
