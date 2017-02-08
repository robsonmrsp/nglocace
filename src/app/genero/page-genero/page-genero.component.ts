import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatatablePageConfig } from 'app/components/models/datatable-page-config';
import { GeneroService } from './../genero.service';
import { Genero } from 'app/components/models/genero';

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


    constructor( private generoService: GeneroService , private router : Router) {
        this.datatableConfig.filterParameters = { nome: '', descricao: '' };
    }

    /**
     * Esse método será executado como o searchGenero o é no backbone
     */
    public paging( object: any ) {
        this.getPageGeneros();
    }

    public reset( object: any ) {
        this.datatableConfig = new DatatablePageConfig();
        this.datatableConfig.filterParameters = { nome: '', descricao: '' };
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
        this.router.navigate(['/generos/new'])
    }

    removeGenero( genero: any ) {
        console.log( 'removendo... ' + genero.nome )
    }

    ngOnInit() {
        this.paging( null );
    }
}
