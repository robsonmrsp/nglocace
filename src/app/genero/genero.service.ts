import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { DatatablePageConfig } from 'app/components/models/datatable-page-config';

@Injectable()
export class GeneroService {

    constructor( private http: Http ) { }


    private generosUrl = 'http://localhost:8080/locace/rs/crud/generos';

    createAuthorizationHeader( headers: Headers ) {
        headers.append( 'Authorization', 'Basic ' +
            btoa( 'mr:123456' ) );
    }

    getPageAll( datatablePageConfig: DatatablePageConfig ): Observable<any> {
        let headers = new Headers();
        let jsonParans = {};

        this.createAuthorizationHeader( headers );



        Object.assign( jsonParans, datatablePageConfig.config, datatablePageConfig.filterParameters );

        let params: URLSearchParams = new URLSearchParams();
        for ( let key in jsonParans ) {
            params.set( key, jsonParans[key] );
        }


        return this.http.get( this.generosUrl, {
            headers: headers,
            search: params
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
