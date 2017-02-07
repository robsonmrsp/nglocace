import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { FilmeComponent } from './filme/filme.component';
import { GeneroComponent } from './genero/genero.component';
import { PageGeneroComponent } from './genero/page-genero/page-genero.component';
import { DatatableSortDirective } from './components/datatable-sort.directive';
import { HomeComponent } from './home/home.component';


@NgModule( {
    declarations: [
        AppComponent,
        FilmeComponent,
        GeneroComponent,
        PageGeneroComponent,
        DatatableSortDirective,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
