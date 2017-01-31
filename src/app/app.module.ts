import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FilmeComponent } from './filme/filme.component';
import { GeneroComponent } from './genero/genero.component';


@NgModule( {
    declarations: [
        AppComponent,
        FilmeComponent,
        GeneroComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
