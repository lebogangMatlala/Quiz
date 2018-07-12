import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorySecondPage } from './history-second';

@NgModule({
  declarations: [
    HistorySecondPage,
  ],
  imports: [
    IonicPageModule.forChild(HistorySecondPage),
  ],
})
export class HistorySecondPageModule {}
