import { Directive, ElementRef, Renderer, EventEmitter, Output, HostListener, Input } from '@angular/core';

import { DatatablePageConfig, Page, Config } from './models/datatable-page-config';

@Directive( {
    selector: '[datatableSort]'
})
export class DatatableSortDirective {

    @Output() public sortChanged: EventEmitter<any> = new EventEmitter();
    @Input( "datatableSort" ) public datatableConfig: DatatablePageConfig;
    @Input() public sortName: string = '';
    direction: string = '';

    constructor( private el: ElementRef, private render: Renderer ) {

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
        switch ( this.direction ) {
            case 'asc':
                this.direction = 'desc';
                this.datatableConfig.config.direction = 'desc';
                this.datatableConfig.config.orderBy = this.sortName;
                icon.className = "fa fa-sort-desc"
                break;
            case 'desc':
                this.direction = '';
                this.datatableConfig.config.direction = '';
                this.datatableConfig.config.orderBy = '';
                icon.className = "fa fa-sort"
                break;
            default:
                this.direction = 'asc';
                this.datatableConfig.config.direction = 'asc';
                this.datatableConfig.config.orderBy = this.sortName;
                icon.className = "fa fa-sort-asc"
                break;
        }

        this.sortChanged.emit( this.datatableConfig );
    }
}
