import { Directive, ElementRef, Renderer, EventEmitter, Output, HostListener, Input, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[form-validator]'
})
export class FormValidatorDirective {

    constructor(private el: ElementRef, private render: Renderer) {

    }

    @Output() public onSave: EventEmitter<any> = new EventEmitter();

    @HostListener('submit', ['$event'])
    public onSubmit(event: any): boolean {
        let isValid: boolean = $(this.el.nativeElement).isValid(null, {
            modules: 'location, date, security, brazil',
            validateOnEvent: true,
            inputParentClassOnSuccess: '',
            addValidClassOnAll: true,
        });

        if (!isValid) {
            event.preventDefault();
            event.stopPropagation()
            event.stopImmediatePropagation()
            return false;
        }
        this.onSave.emit(true);
        return true;
    }

    ngAfterViewInit() {
        $.validate({
            modules: 'location, date, security, brazil',
            validateOnEvent: true,
            inputParentClassOnSuccess: '',
            addValidClassOnAll: true,
        });
    }
}
