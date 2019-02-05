import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IroningPage } from './ironing';

@NgModule({
  declarations: [
    IroningPage,
  ],
  imports: [
    IonicPageModule.forChild(IroningPage),
  ],
})
export class IroningPageModule {}
