import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-circle10',
  templateUrl: 'circle10.html',
})
export class Circle10Page {
  public d: number=0;
  public m: number=0;
  public s: number=0;
  public l10: number=0;
  public dec10: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle10Page');
  }

  calDecimal(){
    this.dec10 =Number (this.d)+Number(this.m/60)+Number(this.s/60/60);

    console.log(this.dec10);
  }

}
