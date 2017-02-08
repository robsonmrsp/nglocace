import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'


import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { FilmeComponent } from './filme/filme.component';
import { GeneroComponent } from './genero/genero.component';
import { PageGeneroComponent } from './genero/page-genero/page-genero.component';
import { DatatableSortDirective } from './components/datatable-sort.directive';
import { HomeComponent } from './home/home.component';
import { FormGeneroComponent } from './genero/form-genero/form-genero.component';
import { MaskDirective } from './components/mask.directive';
import { FormValidatorDirective } from './components/form-validator.directive';


@NgModule( {
    declarations: [
        AppComponent,
        FilmeComponent,
        GeneroComponent,
        PageGeneroComponent,
        DatatableSortDirective,
        HomeComponent,
        FormGeneroComponent,
        MaskDirective,
        FormValidatorDirective
    ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
