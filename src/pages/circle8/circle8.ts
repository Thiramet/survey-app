import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Circle9Page }from'../circle9/circle9';
import { Provider } from '../../providers/provider/provider';

@IonicPage()
@Component({
  selector: 'page-circle8',
  templateUrl: 'circle8.html',
})
export class Circle8Page {
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
    console.log('ionViewDidLoad Circle8Page');
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

  GoCircle9(){
    this.navCtrl.push( Circle9Page );
  }

}
