import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HistoryPage } from '../history/history';


import { AlertController } from 'ionic-angular'
import { NaturePage } from '../nature/nature';
import { SciencePage } from '../science/science';
import { TechnologyPage } from '../technology/technology';
import { ArtPage } from '../art/art';



/**
 * Generated class for the CatergoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catergories',
  templateUrl: 'catergories.html',
})
export class CatergoriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatergoriesPage');
  }

  historyPage()
  {

    const confirm = this.alertCtrl.create({
      title: 'Confirmation?',
      message: 'Your about to take a quiz in History ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            this.navCtrl.setRoot(CatergoriesPage);
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.setRoot(HistoryPage);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();

  }

  goToNature()
  {

    const confirm = this.alertCtrl.create({
      title: 'Confirmation?',
      message: 'Your about to take a quiz in Nature ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            this.navCtrl.setRoot(CatergoriesPage);
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.setRoot(NaturePage);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();

  }

  goToScience()
  {
    const confirm = this.alertCtrl.create({
      title: 'Confirmation?',
      message: 'Your about to take a quiz in Nature ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            this.navCtrl.setRoot(CatergoriesPage);
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.setRoot(SciencePage);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  goToTechnology()
  {
    const confirm = this.alertCtrl.create({
      title: 'Confirmation?',
      message: 'Your about to take a quiz in Nature ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            this.navCtrl.setRoot(CatergoriesPage);
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.setRoot(TechnologyPage);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  goToArt()
  {
    const confirm = this.alertCtrl.create({
      title: 'Confirmation?',
      message: 'Your about to take a quiz in Nature ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            this.navCtrl.setRoot(CatergoriesPage);
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.setRoot(ArtPage);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  
  

}
