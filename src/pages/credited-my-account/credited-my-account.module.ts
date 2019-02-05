import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditedMyAccountPage } from './credited-my-account';

@NgModule({
  declarations: [
    CreditedMyAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditedMyAccountPage),
  ],
})
export class CreditedMyAccountPageModule {}
