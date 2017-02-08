import { Directive, ElementRef, Renderer, EventEmitter, Output, HostListener, Input, AfterViewInit } from '@angular/core';

import { DatatablePageConfig, Page, Config } from './models/datatable-page-config';

@Directive( {
    selector: '[datatableSort]'
})


export class DatatableSortDirective implements AfterViewInit {

    @Output() public sortChanged: EventEmitter<any> = new EventEmitter();
    @Input( "datatableSort" ) public datatableConfig: DatatablePageConfig;
    @Input() public sortName: string = '';
    direction: string = '';

    constructor( private el: ElementRef, private render: Renderer ) {
    }

    ngAfterViewInit() {
        console.log( this.el );
    }

    @Input()
    public get config(): DatatablePageConfig {
        return this.datatableConfig;
    }

    public set config( value: DatatablePageConfig ) {
        this.datatableConfig = value;
    }


    @HostListener( 'click', ['$event'] )
    public onToggleSort( event: any ): void {

        if ( event ) {
            event.preventDefault();
        }
        let icon = this.el.nativeElement.querySelector( 'i' )

        let allIcons = this.el.nativeElement.parentElement.parentElement.querySelectorAll( 'i' );
        allIcons.forEach( function( ico ) {
            ico.className = "fa fa-arrows-v"
        })
        switch ( this.direction ) {
            case 'asc':
                this.direction = 'desc';
                this.datatableConfig.config.direction = 'desc';
                this.datatableConfig.config.orderBy = this.sortName;
                icon.className = "fa fa-sort-alpha-desc"
                break;
            case 'desc':
                this.direction = '';
                this.datatableConfig.config.direction = '';
                this.datatableConfig.config.orderBy = '';
                icon.className = "fa fa-arrows-v"
                break;
            default:
                this.direction = 'asc';
                this.datatableConfig.config.direction = 'asc';
                this.datatableConfig.config.orderBy = this.sortName;
                icon.className = "fa fa-sort-alpha-asc"
                break;
        }

        this.sortChanged.emit( this.datatableConfig );
    }
}
