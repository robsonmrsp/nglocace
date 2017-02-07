import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageGeneroComponent } from './genero/page-genero/page-genero.component';

const APP_ROUTES: Routes = [
    {
        path: 'generos',
        component: PageGeneroComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );