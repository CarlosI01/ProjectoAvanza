import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoguinRoutingModule } from './loguin-routing.module';
import { LoguinComponent } from './loguin/loguin.component';


@NgModule({
  declarations: [
    LoguinComponent
  ],
  imports: [
    CommonModule,
    LoguinRoutingModule
  ]
})
export class LoguinModule { }
