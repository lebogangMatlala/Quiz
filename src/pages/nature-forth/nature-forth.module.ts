import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NatureForthPage } from './nature-forth';

@NgModule({
  declarations: [
    NatureForthPage,
  ],
  imports: [
    IonicPageModule.forChild(NatureForthPage),
  ],
})
export class NatureForthPageModule {}
