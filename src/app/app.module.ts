import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CatergoriesPage } from '../pages/catergories/catergories';

import { HistoryPage} from '../pages/history/history';
import { HistorySecondPage } from '../pages/history-second/history-second';
import { HistoryThirdPage } from '../pages/history-third/history-third';
import { HistoryFourthPage } from '../pages/history-fourth/history-fourth';
import { HistoryFifthPage } from '../pages/history-fifth/history-fifth';

import { NaturePage} from '../pages/nature/nature';
import { NatureSecondPage} from '../pages/nature-second/nature-second';
import { NatureThirdPage} from '../pages/nature-third/nature-third';
import { NatureForthPage} from '../pages/nature-forth/nature-forth';

import {SciencePage} from '../pages/science/science';
import {ScienceSecondPage} from '../pages/science-second/science-second';
import {ScienceThirdPage} from '../pages/science-third/science-third';
import {ScienceFourthPage} from '../pages/science-fourth/science-fourth';


import {TechnologyPage} from '../pages/technology/technology';
import {TechnologySecondPage} from '../pages/technology-second/technology-second';
import {TechnologyThirdPage} from '../pages/technology-third/technology-third';
import {TechnologyFourthPage} from '../pages/technology-fourth/technology-fourth';


import {ArtPage} from '../pages/art/art';
import {ArtSecondPage} from '../pages/art-second/art-second';
import {ArtThirdPage} from '../pages/art-third/art-third';
import {ArtFourthPage} from '../pages/art-fourth/art-fourth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CatergoriesPage,
    HistoryPage,
    HistorySecondPage,
    HistoryThirdPage,
    HistoryFourthPage,
    HistoryFifthPage,
    
    NaturePage,
    NatureSecondPage,
    NatureThirdPage,
    NatureForthPage,

    SciencePage,
    ScienceSecondPage,
    ScienceThirdPage,
    ScienceFourthPage,

    TechnologyPage,
    TechnologySecondPage,
    TechnologyThirdPage,
    TechnologyFourthPage,

    ArtPage,
    ArtSecondPage,
    ArtThirdPage,
    ArtFourthPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CatergoriesPage,
    HistoryPage,
    HistorySecondPage,
    HistoryThirdPage,
    HistoryFourthPage,
    HistoryFifthPage,

    NaturePage,
    NatureSecondPage,
    NatureThirdPage,
    NatureForthPage,

    SciencePage,
    ScienceSecondPage,
    ScienceThirdPage,
    ScienceFourthPage,

    TechnologyPage,
    TechnologySecondPage,
    TechnologyThirdPage,
    TechnologyFourthPage,

    ArtPage,
    ArtSecondPage,
    ArtThirdPage,
    ArtFourthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
