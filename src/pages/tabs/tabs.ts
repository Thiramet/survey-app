import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import{ CompassPage }from'../compass/compass';
import{ NotesPage }from'../notes/notes';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CompassPage;
  tab3Root = NotesPage;

  constructor() {

  }
}
