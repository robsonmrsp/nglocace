import { Injectable } from '@angular/core';

@Injectable()
export class GeneroService {

    constructor() { }

    getAll(): Promise<any> {
        return Promise.resolve( [{ nome: 'robson', descricao: 'teste' }, { nome: 'robson2', descricao: 'teste2' }] );
    }
}
