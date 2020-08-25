import { Component, AfterContentChecked, ViewChild, ViewContainerRef, OnInit, ComponentFactoryResolver } from '@angular/core';
import { OverlaySharedServiceService } from '../overlay-shared-service.service';
import { DynamicOverlayDirective } from '../dynamic-overlay.directive';
import { ParentOverlayComponent } from '../parent-overlay/parent-overlay.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements AfterContentChecked, OnInit {
  
  overlayStatus : boolean;
  overayItem : ParentOverlayComponent;
  //@ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
  @ViewChild(DynamicOverlayDirective) adHost: DynamicOverlayDirective;
  ngAfterContentChecked(): void {
    this.overlayStatus = this.overlaySharedService.overlayStatus;
    this.overayItem = this.overlaySharedService.overlayItem;
    if(this.overlayStatus){
      this.openNav();
    }
    else{
      this.closeNav();
    }
  }

  constructor(private overlaySharedService : OverlaySharedServiceService,
    private componentFactoryResolver: ComponentFactoryResolver) { 
    this.overlayStatus = false;
    
    this.overlaySharedService.overlayStatus = this.overlayStatus;
  }
  openNav() {
    this.loadComponent();
    document.getElementById("myNav").style.width = "100%";
   
  }
  
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
    this.overlaySharedService.overlayStatus = false;
  }
 

  ngOnInit(): void {
    if(this.overayItem){
    this.loadComponent();
    }
  }
  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.overayItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
