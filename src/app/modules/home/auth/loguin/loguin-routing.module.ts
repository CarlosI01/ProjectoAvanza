import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoguinComponent } from './loguin.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: LoguinComponent }

  ])],
  exports: [RouterModule]
})
export class LoguinRoutingModule { }
