import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterVendedorRoutingModule } from './register-vendedor-routing.module';
import { RegisterVendedorComponent } from './register-vendedor.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    RegisterVendedorComponent
  ],
  imports: [
    CommonModule,
    RegisterVendedorRoutingModule,
    ButtonModule
  ]
})
export class RegisterVendedorModule { }
