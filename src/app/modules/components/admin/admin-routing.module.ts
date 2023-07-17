import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [RouterModule.forChild([
    { path: 'admin', loadChildren: () => import('./register-vendedor/register-vendedor.module').then(m => m.RegisterVendedorModule) },
    { path: '**', redirectTo: '/notfound' }
])],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
