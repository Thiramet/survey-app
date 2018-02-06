import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Circle2Page }from'../circle2/circle2';


@IonicPage()
@Component({
  selector: 'page-circle1',
  templateUrl: 'circle1.html',
})
export class Circle1Page {
  public d: number=0;
  public m: number=0;
  public s: number=0;
  public dazm :number=0;
  public mazm :number=0;
  public sazm :number=0;
  public l1 :number=0;
  public n :number=0;
  public e :number=0;
  public dec1: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle1Page');
  }

  calDecimal(){
    this.dec1 =Number (this.d)+Number(this.m/60)+Number(this.s/60/60);

    console.log(this.dec1);
  }

  GoCircle2(){
    this.navCtrl.push( Circle2Page );
  }

}
