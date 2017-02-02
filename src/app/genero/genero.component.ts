import { Component, OnInit } from '@angular/core';

import { GeneroService } from './genero.service';
@Component( {
    selector: 'app-genero',
    templateUrl: './genero.component.html',
    styleUrls: ['./genero.component.css'],

    providers: [GeneroService]
})
export class GeneroComponent implements OnInit {

    pagerGeneros: any = {};

    constructor( private generoService: GeneroService ) { }

    /**
     * carregando todos os generos.
     */
    getPageGeneros() {
        var that = this;

        this.generoService.getPageAll()
            .subscribe(
            //O que fazer em caso de sucesso
            function( pager: any ) {
                that.pagerGeneros = pager;
            },
            //O que fazer em caso de falha
            function( error: any ) {
                console.log( error )
            })
    }

    ngOnInit() {
        this.getPageGeneros();
    }
}
