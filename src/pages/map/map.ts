import { Component ,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController,  } from 'ionic-angular';
import leaflet from 'leaflet';
import {HttpClient} from '@angular/common/http';
import { HomePage }from '../home/home';
import { Provider } from '../../providers/provider/provider';
import { LoadingProvider }from '../../providers/loading/loading';


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  public n = [];
  public e = [];

  public latlon=[];

  @ViewChild('map') mapContainer: ElementRef;
  map: any;

  constructor(
    public navCtrl: NavController,
    public provider: Provider,
    public http: HttpClient,
    public loadingCtrl: LoadingProvider
  ) {

this.loadingCtrl.presentWithGif3();
    setTimeout(() => {
      this.loadingCtrl.dismiss().then(() => {
      });
    }, 3000);	


      this.n = this.provider.getn();
      this.e = this.provider.gete();
      
 
  }
   

  ionViewWillEnter() {
    //this.utm2latlon();
    this.loadmap();
  }

  // utm2latlon(){
  //   for (let i in this.n){

  //     this.http.get("http://cgi.uru.ac.th/service/convert_utm2latlon.php?e="+this.e[i]+"&n="+this.n[i]).subscribe(res=>{
  //       this.latlon.push([Number(res[0].lat), Number(res[0].lon)]);
  //       console.log(this.latlon[i]);
  //     })        
  //   }

  //   setTimeout(() => {
  //     console.log(this.latlon);
  //   }, 500);
    
  // }
 
  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom:20
      
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom:16 })

    for (let i in this.n) {

      this.http.get("http://cgi.uru.ac.th/service/convert_utm2latlon.php?e=" + this.e[i] + "&n=" + this.n[i]).subscribe(res => {
        this.latlon.push([Number(res[0].lat), Number(res[0].lon)]);
        console.log(this.latlon[i]);
      })     }
      


 

    setTimeout(() => {
      console.log(this.latlon);
      let polygon = leaflet.polygon(this.latlon).addTo(this.map);


    }, 500);

    
 
  }


  go2home(){
    this.navCtrl.push(HomePage);
  }

 
  
}
