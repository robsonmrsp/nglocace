import { Component, OnInit } from '@angular/core';

import { GeneroService } from 'app/genero/genero.service';

import { Genero } from 'app/components/models/genero';

@Component( {
    selector: 'app-form-genero',
    templateUrl: './form-genero.component.html',
    styleUrls: ['./form-genero.component.css'],
    providers: [GeneroService]

})
export class FormGeneroComponent implements OnInit {

    private genero: Genero = new Genero();

    constructor( private generoService: GeneroService ) { }

    save() {
        this.generoService.save( this.genero,
            function success( genero: any ) {
                console.log( genero )
            },
            function error( error: any ) {
                console.log( error )
            })
    }

    ngOnInit() {

    }
}
