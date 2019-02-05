import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SponsorshipPage } from './sponsorship';

@NgModule({
  declarations: [
    SponsorshipPage,
  ],
  imports: [
    IonicPageModule.forChild(SponsorshipPage),
  ],
})
export class SponsorshipPageModule {}
