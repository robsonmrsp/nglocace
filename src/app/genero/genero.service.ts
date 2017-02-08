import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { DatatablePageConfig } from 'app/components/models/datatable-page-config';
import { RequestUtils } from 'app/components/models/request-utils';

@Injectable()
export class GeneroService {

    constructor( private http: Http ) { }

    getPageAll( datatablePageConfig: DatatablePageConfig, successCallback: any, errorCallback: any ): void {
        let headers = RequestUtils.createAuthHeaders();

        datatablePageConfig.loading = true;

        let parans = RequestUtils.createParans( datatablePageConfig );

        this.http.get( RequestUtils.getBaseUrl() + '/rs/crud/generos', {
            headers: headers,
            search: parans
        }).map( function( res: Response ) {
            datatablePageConfig.loading = false;
            return res.json()
        }).catch( function( err: any ) {
            console.error( err )
            datatablePageConfig.loading = false;
            return Observable.throw( err.json().error || 'Server error' )
        }).subscribe( successCallback, errorCallback );
    }

}
