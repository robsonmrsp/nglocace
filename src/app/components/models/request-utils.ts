import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { DatatablePageConfig } from 'app/components/models/datatable-page-config';

/**
 * 
 */
export class RequestUtils {
    public static createParans( datatablePageConfig: DatatablePageConfig ): URLSearchParams {
        let jsonParans = {}
        let params: URLSearchParams = new URLSearchParams();

        Object.assign( jsonParans, datatablePageConfig.config, datatablePageConfig.filterParameters );

        for ( let key in jsonParans ) {
            params.set( key, jsonParans[key] );
        }

        return params;
    }

    public static getBaseUrl(): String {
        return 'http://localhost:8080/locace'
    }

    public static createAuthHeaders(): Headers {
        let headers = new Headers();
        headers.append( 'Authorization', 'Basic ' + btoa( 'mr:123456' ) );
        return headers;
    }

}

