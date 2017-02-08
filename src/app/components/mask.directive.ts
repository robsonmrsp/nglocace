import { Directive, ElementRef, Renderer, EventEmitter, Output, HostListener, Input, AfterViewInit } from '@angular/core';

@Directive( {
    selector: '[input-mask]'
})
export class MaskDirective {
    constructor( private el: ElementRef, private render: Renderer ) {
    }

    ngAfterViewInit() {
        $( this.el.nativeElement ).inputmask( "99-9999999" );
        console.log( this.el );
    }

}
