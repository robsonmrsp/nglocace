import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GeneroService {

    constructor( private http: Http ) { }


    private generosUrl = 'http://localhost:3000/api/comments';

    getPageAll(): Observable<any> {
        return this.http.get( this.generosUrl )
            .map( function( res: Response ) {
                console.log( res )
                //deve Devolver um Pager de Genero
                return res.json()
            })
            .catch( function( err: any ) {
                console.log( err )
                return Observable.throw( err.json().error || 'Server error' )
            });
    }


    get_All(): Promise<any> {


        return Promise.resolve( [{ nome: 'robson', descricao: 'teste' }, { nome: 'robson2', descricao: 'teste2' }] );
    }
}
