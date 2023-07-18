import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NosotrosComponent }

  ])],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
