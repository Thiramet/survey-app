import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Provider } from '../../providers/provider/provider';


@IonicPage()
@Component({
  selector: 'page-circle11',
  templateUrl: 'circle11.html',
})
export class Circle11Page {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public provider: Provider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle11Page');
  }

  showData(){
    let obD = this.provider.getobD();
    let obM = this.provider.getobM();
    let obS = this.provider.getobS();
    let azmD = this.provider.getazmD();
    let azmM = this.provider.getazmM();
    let azmS = this.provider.getazmS();
    let dist = this.provider.getdist();
    let n = this.provider.getn();
    let e = this.provider.gete();

    console.log(obD, obM,obS,azmD,azmM,azmS,dist,n,e);
  }

}
