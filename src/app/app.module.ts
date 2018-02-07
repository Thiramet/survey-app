import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Circle1Page }from'../pages/circle1/circle1';
import { Circle2Page }from'../pages/circle2/circle2';
import { Circle11Page }from'../pages/circle11/circle11';
import{ CompassPage }from'../pages/compass/compass';
import{ NotesPage }from'../pages/notes/notes';
import { MapPage }from'../pages/map/map';
import { CalculatePage }from'../pages/calculate/calculate';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingProvider } from '../providers/loading/loading';
import { Provider } from '../providers/provider/provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    Circle1Page,
    Circle2Page,
    Circle11Page,
    CompassPage,
    NotesPage,
    MapPage,
    CalculatePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    Circle1Page,
    Circle2Page,
    Circle11Page,
    CompassPage,
    NotesPage,
    MapPage,
    CalculatePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadingProvider,
    Provider
  ]
})
export class AppModule {}
