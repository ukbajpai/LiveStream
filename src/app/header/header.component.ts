import { Component, OnInit } from '@angular/core';
import { OverlaySharedServiceService } from '../overlay-shared-service.service';
import { ParentOverlayComponent } from '../parent-overlay/parent-overlay.component';
import { AddCameraComponent } from '../add-camera/add-camera.component';
import { AddContributorComponent } from '../add-contributor/add-contributor.component';
import { UserOptionsComponent } from '../user-options/user-options.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private overlaySharedServ : OverlaySharedServiceService) { 
   

  }

  ngOnInit() {
  }

  openHeaderNav(){
    this.overlaySharedServ.updateOverlayStatus(true, new ParentOverlayComponent(UserOptionsComponent));
  }

  openHeaderContriNav(){
    this.overlaySharedServ.updateOverlayStatus(true, new ParentOverlayComponent(AddContributorComponent));
  }

}
