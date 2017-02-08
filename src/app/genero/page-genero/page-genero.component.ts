import { Component, OnInit } from '@angular/core';
import { GeneroService } from './../genero.service';
import { DatatablePageConfig } from 'app/components/models/datatable-page-config';

@Component( {
    selector: 'app-page-genero',
    templateUrl: './page-genero.component.html',
    styleUrls: ['./page-genero.component.css'],
    providers: [GeneroService]
})

export class PageGeneroComponent implements OnInit {

    /**
     * Na pratica, quase todo mundo (sorter, counter e o paginator ) alterará esse objeto. e ele será utilizado para realizar a consulta.
     */
    public datatableConfig: DatatablePageConfig = new DatatablePageConfig();

    public tamanhoPagina: Number = 10;

    constructor( private generoService: GeneroService ) { }

    /**
     * Esse método será executado como o searchGenero o é no backbone
     */
    public paging( object: any ) {
        this.getPageGeneros();
    }

    /**
     * carregando todos os generos. Simplificar o uso disso com a passagem simples de dois calbacks, o success e o error. COMO TODOS ESTÃO MAIS ACOSTUMADOS
     */
    getPageGeneros() {
        var that = this;
        this.generoService.getPageAll(
            this.datatableConfig,
            function( pager: any ) {
                that.datatableConfig.page = pager;
            },

            function( error: any ) {
                console.log( error )
            })
    }
    
    editGenero( genero: any ) {
        console.log( 'editando... ' + genero.nome )
    }

    removeGenero( genero: any ) {
        console.log( 'removendo... ' + genero.nome )
    }

    ngOnInit() {
        this.paging( null );
    }

}
