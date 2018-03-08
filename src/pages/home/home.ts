import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Circle1Page }from'../circle1/circle1';
import { LoadingProvider } from '../../providers/loading/loading';
import { ClearArreyProvider }from'../../providers/clear-arrey/clear-arrey';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingProvider,
    public cleararrey : ClearArreyProvider
  ) {
        this.loadingCtrl.presentWithGif1();
	setTimeout(() => {
	   this.loadingCtrl.dismiss().then(() => {
           });
  }, 2000);		
  
  this.cleararrey.clear2Arrey();
  
	}

	goCircle1(){
    this.navCtrl.push( Circle1Page )
  }



}
