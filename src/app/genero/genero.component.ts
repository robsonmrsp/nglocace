import { Component, OnInit } from '@angular/core';

import { GeneroService } from './genero.service';
@Component( {
    selector: 'app-genero',
    templateUrl: './genero.component.html',
    styleUrls: ['./genero.component.css'],
    providers: [GeneroService]
})
export class GeneroComponent implements OnInit {

    generos: any[] = [];

    constructor( private generoService: GeneroService ) { }

    getGeneros() {
        this.generoService.getAll().then(( generos: any[] ) => this.generos = generos );
    }

    ngOnInit() {
        this.getGeneros();
    }

}
