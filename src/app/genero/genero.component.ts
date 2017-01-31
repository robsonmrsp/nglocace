import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-genero',
    templateUrl: './genero.component.html',
    styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

    constructor() { }

    generos: any[] = [{ nome: 'robson', descricao: 'teste' }, { nome: 'robson2', descricao: 'teste2' }];

    ngOnInit() {

    }

}
