import { Directive, EventEmitter, Output, HostListener, Input } from '@angular/core';

@Directive( {
    selector: '[datatableSort]'
})
export class DatatableSortDirective {
    constructor() { }
    
    @Output() public sortChanged: EventEmitter<any> = new EventEmitter();
    @Input() public sortName: any;
    direction: string = '';

    @HostListener( 'click', ['$event'] )
    public onToggleSort( event: any ): void {
        if ( event ) {
            event.preventDefault();
        }

        switch ( this.direction ) {
            case 'asc':
                this.direction = 'desc';
                break;
            case 'desc':
                this.direction = '';
                break;
            default:
                this.direction = 'asc';
                break;
        }

        console.log( 'sortChanged: ' + this.sortName + ' ' + this.direction );
        
        this.sortChanged.emit( { orderBy: this.sortName, direction: this.direction });
    }
}
