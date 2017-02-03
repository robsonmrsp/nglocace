import { Directive, EventEmitter, Output, HostListener, Input } from '@angular/core';
import { DatatablePageConfig, Page, Config } from './models/datatable-page-config';

@Directive( {
    selector: '[datatableSort]'
})
export class DatatableSortDirective {
    constructor() { }

    @Output() public sortChanged: EventEmitter<any> = new EventEmitter();
    @Input( "datatableSort" ) public datatableConfig: DatatablePageConfig;
    @Input() public sortName: string = '';
    direction: string = '';

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

        switch ( this.direction ) {
            case 'asc':
                this.direction = 'desc';
                this.datatableConfig.config.direction = 'desc';
                this.datatableConfig.config.orderBy = this.sortName;
                break;
            case 'desc':
                this.direction = '';
                this.datatableConfig.config.direction = '';
                this.datatableConfig.config.orderBy = '';
                break;
            default:
                this.direction = 'asc';
                this.datatableConfig.config.direction = 'asc';
                this.datatableConfig.config.orderBy = this.sortName;
                break;
        }


        this.sortChanged.emit( this.datatableConfig );
    }
}
