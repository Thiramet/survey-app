import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Circle1Page }from'../circle1/circle1';
import { LoadingProvider } from '../../providers/loading/loading';
import { MapPage }from'../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingProvider) {
        this.loadingCtrl.presentWithGif1(); 
	setTimeout(() => { 
	   this.loadingCtrl.dismiss().then(() => {  
           }); 
	}, 5000);				 					       
	}  
	
	goCircle1(){
    this.navCtrl.push( Circle1Page )
  }

  goMap(){
    this.navCtrl.push ( MapPage );
  }


}