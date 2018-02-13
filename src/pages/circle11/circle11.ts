import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Provider } from '../../providers/provider/provider';


@IonicPage()
@Component({
  selector: 'page-circle11',
  templateUrl: 'circle11.html',
})
export class Circle11Page {
  public obD: any;
  public obM: any;
  public obS: any;
  public azmD: any;
  public azmM: any;
  public azmS: any;
  public dist: any;
  public n: any;
  public e: any;
  public oDec: Array<Number>;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public provider: Provider
  ) {
    this.obD = this.provider.getobD();
    this.obM = this.provider.getobM();
    this.obS = this.provider.getobS();
    this.azmD = this.provider.getazmD();
    this.azmM = this.provider.getazmM();
    this.azmS = this.provider.getazmS();
    this.dist = this.provider.getdist();
    this.n = this.provider.getn();
    this.e = this.provider.gete();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Circle11Page');
    //
    this.showData();

  }

  toDecimal(){
    var Banana1 = this.obD;
    var Banana2 = this.obM;
    var Banana3 = this.obS;
    var x=x;

    var i=1;
    for ( x in Banana1){
      console.log(Banana1[i]+(Banana2[i]/60)+(Banana3[i]/60/60))
      console.log(i);
      i++;
    }}



  showData(){
    console.log(this.obD, this.obM,this.obS,this.azmD,this.azmM,this.azmS,this.dist,this.n,this.e);
  }

  

}
