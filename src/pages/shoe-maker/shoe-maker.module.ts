import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoeMakerPage } from './shoe-maker';

@NgModule({
  declarations: [
    ShoeMakerPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoeMakerPage),
  ],
})
export class ShoeMakerPageModule {}
