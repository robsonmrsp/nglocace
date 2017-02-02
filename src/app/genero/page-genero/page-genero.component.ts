import { Component, OnInit } from '@angular/core';
import { GeneroService } from './../genero.service';

@Component( {
    selector: 'app-page-genero',
    templateUrl: './page-genero.component.html',
    styleUrls: ['./page-genero.component.css'],
    providers: [GeneroService]
})

export class PageGeneroComponent implements OnInit {

    pagerGeneros: any = {};
    dataTableConfig : any = {
            
    } 

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
                console.log( 'Pager: ' + JSON.stringify( pager ) );
            },
            //O que fazer em caso de falha
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

    public paging( object: any ) {
        console.log( JSON.stringify( object ) );
    }
    ngOnInit() {
        this.getPageGeneros();
    }

}
