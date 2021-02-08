import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonitoradaPage } from './monitorada';

@NgModule({
  declarations: [
    MonitoradaPage,
  ],
  imports: [
    IonicPageModule.forChild(MonitoradaPage),
  ],
})
export class MonitoradaPageModule {}
