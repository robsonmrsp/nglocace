import { Directive, ElementRef, Renderer, EventEmitter, Output, HostListener, Input, AfterViewInit } from '@angular/core';

@Directive( {
    selector: '[form-validator]'
})
export class FormValidatorDirective {

    constructor( private el: ElementRef, private render: Renderer ) {

    }

    ngAfterViewInit() {
        $( this.el ).bind( 'submit', function( event ) {
            let isValid: boolean = $( this.el ).isValid( null, {
                modules: 'location, date, security, brazil',
                validateOnEvent: true,
                inputParentClassOnSuccess: '',
                addValidClassOnAll: true,
            });

            if ( !isValid ) {
                event.preventDefault();
            }
        })
        $.validate( {
            modules: 'location, date, security, brazil',
            validateOnEvent: true,
            inputParentClassOnSuccess: '',
            addValidClassOnAll: true,
        });


        console.log( this.el );
    }

}
