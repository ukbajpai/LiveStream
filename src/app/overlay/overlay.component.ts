import { Component, AfterContentChecked, ViewChild, ViewContainerRef, OnInit, ComponentFactoryResolver } from '@angular/core';
import { OverlaySharedServiceService } from '../overlay-shared-service.service';
import { DynamicOverlayDirective } from '../dynamic-overlay.directive';
import { ParentOverlayComponent } from '../parent-overlay/parent-overlay.component';

import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { AddCameraService} from '../add-camera.service';
@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements AfterContentChecked, OnInit {
  cam_form: FormGroup;
 
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
    private componentFactoryResolver: ComponentFactoryResolver, private service : AddCameraService, private fb : FormBuilder) { 
      this.cam_form = this.fb.group({
        camIp: [''],
        camName : ['']
        
      })
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
 
  }
 

  onSubmit() {
    if (this.cam_form.valid) {
      this.service.addCamera(this.cam_form.value).subscribe(value => alert("Camera Added"));
    }
  }

}
