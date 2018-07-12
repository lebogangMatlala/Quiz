import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CatergoriesPage } from '../catergories/catergories';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goNext()
  {
    this.navCtrl.push(CatergoriesPage);
  }

}
