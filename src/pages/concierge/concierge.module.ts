import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConciergePage } from './concierge';

@NgModule({
  declarations: [
    ConciergePage,
  ],
  imports: [
    IonicPageModule.forChild(ConciergePage),
  ],
})
export class ConciergePageModule {}
