import { Component, OnInit } from '@angular/core';
import { OverlaySharedServiceService } from '../overlay-shared-service.service';
import { AddCameraComponent } from '../add-camera/add-camera.component';
import { ParentOverlayComponent } from '../parent-overlay/parent-overlay.component';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  constructor(private overlayService : OverlaySharedServiceService) { }

  ngOnInit() {
  }

  openAddCameraComponent(){
    this.overlayService.updateOverlayStatus(true, new ParentOverlayComponent(AddCameraComponent));
  }

  openServiceComponent(){
    this.overlayService.updateOverlayStatus(true, new ParentOverlayComponent(ServiceComponent));
  }
}
