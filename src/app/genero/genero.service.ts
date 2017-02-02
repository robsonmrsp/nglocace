import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GeneroService {

    constructor( private http: Http ) { }


    private generosUrl = 'http://localhost:8083/locace/rs/crud/generos';

    createAuthorizationHeader( headers: Headers ) {
        headers.append( 'Authorization', 'Basic ' +
            btoa( 'mr:123456' ) );
    }

    getPageAll(): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader( headers );

        return this.http.get( this.generosUrl, {
            headers: headers
        }).map( function( res: Response ) {
            console.log( res )
            //deve Devolver um Pager de Genero
            return res.json()
        }).catch( function( err: any ) {
            console.log( err )
            return Observable.throw( err.json().error || 'Server error' )
        });
    }


    get_All(): Promise<any> {


        return Promise.resolve( [{ nome: 'robson', descricao: 'teste' }, { nome: 'robson2', descricao: 'teste2' }] );
    }
}
