import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClientComponent } from './register-client.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: RegisterClientComponent }

  ])],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
