import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Values } from '../../app/Values';
import nameArr from '../../app/namesArray';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';


import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ArtSecondPage } from '../art-second/art-second';
/**
 * Generated class for the ArtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-art',
  templateUrl: 'art.html',
})
export class ArtPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }


 

  @ViewChild(Slides) slides: Slides;

  goToSlide(){
    this.slides.slideTo(1,1000);
 
  }

  goToSlide3(){
    this.slides.slideTo(2,1000);
  }

  goToSlide4(){
    this.slides.slideTo(3,1000);
  }

  goToSlide5(){
    this.slides.slideTo(4,1000);
  }

  answers1: String[] = ["Bettie Cilliers-Barnard","Vladimir Tretchikoff","Anton Kannemeyer","Gerard Sekoto","Ester Mahlangu"];
  
  Ans1;
  Ans2;
  Ans3;
  Ans4;
  Ans5;
  obj;
  count=0;
  
  addTotal()
  {
    
    let obj=new Values(this.Ans1);
    let obj2=new Values(this.Ans2);
    let obj3=new Values(this.Ans3);
    let obj4=new Values(this.Ans4);
    let obj5=new Values(this.Ans5);

    nameArr.push(obj);
    nameArr.push(obj2);
    nameArr.push(obj3);
    nameArr.push(obj4);
    nameArr.push(obj5);

    console.log(nameArr);
    console.log(this.count);
    for(var i =0;i<nameArr.length;i++)
    {
      if(nameArr[i].name ==this.answers1[i])
      {
          this.count+=1; 
       }
    }
    console.log(this.count);

    if(this.count==5)
    {
     const confirm = this.alertCtrl.create({
       title: 'Congratulation',
       message: 'Congratulation You have passed the first stage.Go to the next Stage?',
       buttons: [
         {
           text: 'Replay',
           handler: () => {
             nameArr.splice(0);
             this.count=0;
             console.log(nameArr);
             console.log(this.count)
             this.navCtrl.setRoot(ArtPage);
             console.log('Disagree clicked');
           }
         },
         {
           text: 'Next Stage',
           handler: () => {
             nameArr.splice(0);
             this.count=0;
             console.log(nameArr);
             console.log(this.count);
             this.navCtrl.setRoot(ArtSecondPage);
             console.log('Agree clicked');
           }
         }
       ]
     });
     confirm.present();
 
    }
    else if(this.count<5)
    {
 
     const exit = this.alertCtrl.create({
       title: 'Confirm User',
       message: 'Unfortunately You have failed the first stage.You only answered '+this.count +' correct',
       buttons: [
         {
           text: 'Go to home',
           handler: () => {
             nameArr.splice(0);
             this.count=0;
             console.log(nameArr);
             console.log(this.count)
             this.navCtrl.setRoot(HomePage);
             console.log('Disagree clicked');
           }
         },
         {
           text: 'Play again',
           handler: () => {
             nameArr.splice(0);
             this.count=0;
             console.log(nameArr);
             console.log(this.count);
             this.navCtrl.setRoot(ArtSecondPage);
             console.log('Agree clicked');
           }
         }
       ]
     });
     exit.present();
 
    }



  }







}
