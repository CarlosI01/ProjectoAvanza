import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterVendedorComponent } from './register-vendedor.component';


@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: RegisterVendedorComponent }
])],
  exports: [RouterModule]
})
export class RegisterVendedorRoutingModule { }
