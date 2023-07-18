import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent as UserLayoutComponent } from './layout/app.layout.component';
import { AppLayoutComponent as AdminLayoutComponent} from './admin/app.layout.component';

import { AppConfig } from './admin/app.config';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppConfig.userRole === 'admin' ? AdminLayoutComponent : UserLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'admin', loadChildren: () => import('./modules/components/admin/admin.module').then(m => m.AdminModule) },
            { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
            { path: 'planes', loadChildren: () => import('./modules/home/planes/planes.module').then(m => m.PlanesModule) },
            { path: 'nosotros', loadChildren: () => import('./modules/home/nosotros/nosotros.module').then(m => m.NosotrosModule) },
            { path: 'register/client', loadChildren: () => import('./modules/home/auth/client/client.module').then(m => m.ClientModule) },
            { path: 'home/loguin', loadChildren: () => import('./modules/home/auth/loguin/loguin.module').then(m => m.LoguinModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
