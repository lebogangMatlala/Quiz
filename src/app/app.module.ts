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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CatergoriesPage,
    HistoryPage,
    HistorySecondPage,
    HistoryThirdPage,
    HistoryFourthPage,
    HistoryFifthPage

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
    HistoryFifthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
