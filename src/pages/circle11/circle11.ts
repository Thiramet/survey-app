import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Provider } from '../../providers/provider/provider';


@IonicPage()
@Component({
  selector: 'page-circle11',
  templateUrl: 'circle11.html',
})
export class Circle11Page {

  //
  public obD: any;
  public obM: any;
  public obS: any;
  public azmD: any;
  public azmM: any;
  public azmS: any;
  public dist = [];
  public n= [];
  public e=[];

  //
  public oDec = [];
  public sumD: number;
  public calD: number;
  public errD: number;
  public crrD: number;
  public corDec = [];

  //
  public Azi = [];
  public tod = [];
  public sumDist: any;

  public sinAzi = [];
  public cosAzi = [];
  public sumSinAzi: number;
  public sumCosAzi: number;

  public errE = [];
  public errN = [];
  public sumErrE: number;
  public sumErrN: number;
 



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
    console.log('ionViewDidLoad Circle11Page');    //


  }

  toAzi() {
    //add Azi คำนวณมุมออกมาเป็นทศนิยม(Azi)
    this.corDec.push(0);
    this.Azi.push(Number(this.azmD) + (Number(this.azmM) / 60) + (Number(this.azmS / 60 / 60)));

    for (let d in this.corDec) {
      this.tod.push(Number(this.Azi[d]) + Number(this.corDec[d]));
      //console.log(this.tod);
      //
      if (this.tod[d] >= 540) {
        this.Azi.push(Number(this.tod[d] - 540));
      } else if (this.tod[d] >= 180) {
        this.Azi.push(Number(this.tod[d] - 180));
      } else {
        this.Azi.push(Number(this.tod[d] + 180));
      }
    }
    console.log("toAzi ok!");
  }

  toDecimal() {
    let obD = this.obD;
    let obM = this.obM;
    let obS = this.obS;


    //add oDec คำนวณมุมออกมาเป็นทศนิยม
    let i = 0;
    for (let x in obD) {
      this.oDec.push(obD[i] + (obM[i] / 60) + (obS[i] / 60 / 60));
      i++;
    }

    //หาผลรวมของทศนิยม
    this.sumD = this.oDec.reduce((a, b) => a + b, 0);
    this.calD = (Number(this.oDec.length) - 2) * 180;
    this.errD = Number(this.sumD) - Number(this.calD);
    this.crrD = Number(this.errD) / Number(this.oDec.length);


    let j = 0;
    for (let x in this.oDec) {
      this.corDec.push(this.oDec[j] - this.crrD);
      j++;
    }
    // คำนวณ distance
    this.sumDist = this.dist.reduce((a, b) => a + b, 0);

    console.log("toDecimal ok!");

  }

  calDistance() {
    for (let x in this.dist) {
      this.sinAzi.push(Number(this.dist[x]) * Math.sin(Number(this.Azi[x]) / 57.29578));
      this.cosAzi.push(Number(this.dist[x]) * Math.cos(Number(this.Azi[x]) / 57.29578));
    }
    //console.log(this.sinAzi);
    this.sumSinAzi = this.sinAzi.reduce((a, b) => a + b, 0);
    this.sumCosAzi = this.cosAzi.reduce((a, b) => a + b, 0);
    console.log("calDistance ok!");
  }

  calError() {
    for (let x in this.sumDist) {
      this.errE.push(Number(this.sinAzi[x]) * (Number(this.sumSinAzi) / Number(this.sumDist)));
      this.errN.push(Number(this.cosAzi[x]) * (Number(this.sumCosAzi) / Number(this.sumDist)));
    }
    this.sumErrE = this.sinAzi.reduce((a, b) => a + b, 0);
    this.sumErrN = this.cosAzi.reduce((a, b) => a + b, 0);
    console.log("calError ok!");
  }

  calCoordinates() {
   
    for (let x in this.sinAzi) {
      this.e.push(Number(this.e[x]) + (Number(this.sinAzi[x]) + Number(this.errE[x])));
      this.n.push(Number(this.e[x]) + (Number(this.cosAzi[x]) + Number(this.errN[x])));
    
    }


    console.log(this.e);
    console.log(this.n);
    console.log("calCoordinates ok!");

  }



}
