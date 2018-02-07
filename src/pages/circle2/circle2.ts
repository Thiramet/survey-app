import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Provider } from '../../providers/provider/provider';
import { Circle11Page } from '../circle11/circle11';

@IonicPage()
@Component({
  selector: 'page-circle2',
  templateUrl: 'circle2.html',
})
export class Circle2Page {
  public obD: number=0;
  public obM: number=0;
  public obS: number=0;
  public dist: number=0;
  swap : boolean;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: Provider

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle2Page')

  }

  addData(){
    this.provider.setobD(Number(this.obD));
    this.provider.setobM(Number(this.obM));
    this.provider.setobS(Number(this.obS));
    this.provider.setdist(Number(this.dist));

  }

  showData(){
    let obD = this.provider.getobD();
    let obM = this.provider.getobM();
    let obS = this.provider.getobS();
    let dist = this.provider.getdist();

    console.log(obD, obM,obS,dist);
  }


  goCal(){
    console.log("คำนวณ");
  }

  next() {
       this.swap = !this.swap;
   }

gotoCircle11(){
  this.navCtrl.push( Circle11Page );

}



}
