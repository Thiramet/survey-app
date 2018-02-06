import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import{ CompassPage }from'../compass/compass';
import{ NotesPage }from'../notes/notes';
import{ CalculatePage }from'../calculate/calculate';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CompassPage;
  tab3Root = NotesPage;
  tab4Root = CalculatePage;

  constructor() {

  }
}
