import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicOverlay]'
})
export class DynamicOverlayDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
