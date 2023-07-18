import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomComponent } from './hom.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    // { path: 'home', loadChildren: () => import('./home.module').then(m => m.HomeModule) },
    { path: '', component: HomComponent }

  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
