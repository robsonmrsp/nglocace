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
    public showAdvanceSearch: boolean = false;
    public isCollapsed: boolean = false;
    public datatableConfig: DatatablePageConfig = new DatatablePageConfig();

    public tamanhoPagina: Number = 10;

    constructor( private generoService: GeneroService ) { }

    /**
     * carregando todos os generos. Simplificar o uso disso com a passagem simples de dois calbacks, o success e o error. COMO TODOS ESTÃO MAIS ACOSTUMADOS
     */
    getPageGeneros() {
        var that = this;

        this.generoService.getPageAll( this.datatableConfig )
            .subscribe(
            //O que fazer em caso de sucesso
            function( pager: any ) {
                that.datatableConfig.page = pager;
                console.log( 'Pager: ' + JSON.stringify( pager ) );
            },
            //O que fazer em caso de falha
            function( error: any ) {
                console.log( error )
            })
    }


    /**
     * Esse método será executado como o searchGenero o é no backbone
     * 
     */
    public paging( object: any ) {
        this.getPageGeneros();
        console.log( JSON.stringify( this.datatableConfig ) );
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
