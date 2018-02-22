import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Circle2Page }from'../circle2/circle2';
import { Provider } from '../../providers/provider/provider';


@IonicPage()
@Component({
  selector: 'page-circle1',
  templateUrl: 'circle1.html',
})
export class Circle1Page {
  public obD: number=0;
  public obM: number=0;
  public obS: number=0;
  public azmD :number=0;
  public azmM :number=0;
  public azmS :number=0;
  public n :number=0;
  public e :number=0;
  //public dec1: number=0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: Provider
  ) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Circle1Page');
  }

  addData(){
    this.provider.setobD(Number(this.obD));
    this.provider.setobM(Number(this.obM));
    this.provider.setobS(Number(this.obS));
    this.provider.setazmD(Number(this.azmD));
    this.provider.setazmM(Number(this.azmM));
    this.provider.setazmS(Number(this.azmS));
    this.provider.setn(Number(this.n));
    this.provider.sete(Number(this.e));
  }

  showData(){
    let obD = this.provider.getobD();
    let obM = this.provider.getobM();
    let obS = this.provider.getobS();
    let azmD = this.provider.getazmD();
    let azmM = this.provider.getazmM();
    let azmS = this.provider.getazmS();
    let n = this.provider.getn();
    let e = this.provider.gete();

    console.log(obD, obM,obS,azmD,azmM,azmS,n,e);
  }


  GoCircle2(){
    this.navCtrl.push( Circle2Page );
  }

}
