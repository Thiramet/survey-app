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
  public dist: any;
  public n: any;
  public e: any;

//
  public oDec=[];
  public sumD : number;
  public calD : number;
  public errD : number;
  public crrD : number;
  public corDec =[];

  //
  public Azi =[];
  public tod =[];
  public sumDist:any;

  public sinAzi =[];
  public cosAzi =[];
  public sumSinAzi:number;
  public sumCosAzi:number;

  public errE =[];
  public errN =[];
  public sumErrE : number;
  public sumErrN : number;
  public costE = [];
  public costN = [];



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


  }

 toAzi(){
    //add Azi คำนวณมุมออกมาเป็นทศนิยม(Azi)
    this.Azi.push(Number(this.azmD) + (Number(this.azmM)/60) + (Number(this.azmS/60/60)));
    let k=0;
    for(let d in this.corDec){
      this.tod.push(Number(this.Azi[k]) + Number(this.corDec[k]));
//
      if(this.tod[k]>=540){
       this.Azi.push(Number (this.tod[k]-540));
      }else if(this.tod[k]>=180){
        this.Azi.push(Number(this.tod[k]-180));
      }else{
        this.Azi.push(Number(this.tod[k]+180));
      }
      k++;
    }

      console.log('Distance');
      console.log(this.sumDist);
      console.log('Azi');
      console.log(this.Azi);
      console.log('tod');
      console.log(this.tod);
  }

  toDecimal(){
    let obD = this.obD;
    let obM = this.obM;
    let obS = this.obS;


    //add oDec คำนวณมุมออกมาเป็นทศนิยม
    let i=0;
    for (let x in obD){
      this.oDec.push(obD[i]+(obM[i]/60)+(obS[i]/60/60));
      i++;
    }

    //หาผลรวมของทศนิยม
    this.sumD = this.oDec.reduce((a, b)=> a + b, 0);
    this.calD=(Number(this.oDec.length)-2)*180;
    this.errD=Number(this.sumD)-Number(this.calD);
    this.crrD=Number(this.errD)/Number(this.oDec.length);


    let j=0;
    for (let x in this.oDec){
      this.corDec.push(this.oDec[j]-this.crrD);
      j++;
    }

    // คำนวณ distance
    this.sumDist = this.dist.reduce((a, b)=> a + b, 0);

  }

  calDistance(){
    let m=1;
    for (let x in this.dist){
      this.sinAzi.push(Number(this.dist[m])* Math.sin(Number(this.Azi[m])/57.29578));
      this.cosAzi.push(Number(this.dist[m]) * Math.cos(Number(this.Azi[m])/57.29578));
      m++;
    }

    // sum cos sin Azi
    setTimeout(function(){
      this.sumSinAzi = this.sinAzi.reduce((a, b)=> a + b, 0);
      this.sumCosAzi = this.cosAzi.reduce((a, b)=> a + b, 0);
    }, 800);

  }

  calError(){
    let n=1;
    for (let x in this.dist){
      this.errE.push(Number(this.sinAzi[n])* (Number(this.sumSinAzi)/Number(this.sumDist)));
      this.errN.push(Number(this.cosAzi[n]) * (Number(this.sumCosAzi)/Number(this.sumDist)));
      n++;
    }

    setTimeout(function(){
      this.sumErrE = this.sinAzi.reduce((a, b)=> a + b, 0);
      this.sumErrN = this.cosAzi.reduce((a, b)=> a + b, 0);
    }, 1000);
  }

  calCoordinates(){
    let p=1;
    for (let x in this.dist){
      this.costE.push(Number(this.n) + (Number(this.sinAzi[p])+Number(this.errE[p])));
      this.costN.push(Number(this.e) + (Number(this.cosAzi[p])+Number(this.errN[p])));
      p++;
    }

    setTimeout(function(){
      let costE = this.provider.getobD();
      let costN = this.provider.getobM();

      console.log(costE,costN);
    }, 1200);

  }

 

}
