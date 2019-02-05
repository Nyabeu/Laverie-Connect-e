import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MachineDetailPage } from './machine-detail';

@NgModule({
  declarations: [
    MachineDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MachineDetailPage),
  ],
})
export class MachineDetailPageModule {}
