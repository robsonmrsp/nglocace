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

    /**
     * carregando todos os generos.
     */
    getGeneros() {
        var that = this;

        this.generoService.getAll()
            .then( function( generos: any[] ) {
                that.generos = generos;
            })
            .catch( function( err: any ) {
                console.error( err );
            });
    }

    ngOnInit() {
        this.getGeneros();
    }
}
