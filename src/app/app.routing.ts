import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageGeneroComponent } from './genero/page-genero/page-genero.component';
import { FormGeneroComponent } from './genero/form-genero/form-genero.component';

const APP_ROUTES: Routes = [
    {
        path: 'generos',
        component: PageGeneroComponent
    },
    {
        path: 'generos/new',
        component: FormGeneroComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );