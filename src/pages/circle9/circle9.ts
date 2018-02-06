import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Circle10Page }from'../circle10/circle10';
import { Provider } from '../../providers/provider/provider';

@IonicPage()
@Component({
  selector: 'page-circle9',
  templateUrl: 'circle9.html',
})
export class Circle9Page {
  public obD: number=0;
  public obM: number=0;
  public obS: number=0;
  public dist: number=0;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public provider: Provider
   ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle9Page');
  }
  addData(){
    this.provider.setobD(this.obD);
    this.provider.setobM(this.obM);
    this.provider.setobS(this.obS);
    this.provider.setdist(this.dist);

  }

  showData(){
    let obD = this.provider.getobD();
    let obM = this.provider.getobM();
    let obS = this.provider.getobS();
    let dist = this.provider.getdist();

    console.log(obD, obM,obS,dist);
  }


  GoCircle10(){
    this.navCtrl.push( Circle10Page );
  }

}
