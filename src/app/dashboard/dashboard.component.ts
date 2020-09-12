import { Component, OnInit } from '@angular/core';

import { AddCameraService} from '../add-camera.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  ngOnInit() {
    this.service.retrieveCamera().subscribe(value => this.cameraList = value);
    console.log(JSON.stringify(this.cameraList));
  
  }
  
  title = 'LiveStream';
  cameraList : any = [];
  constructor(private service: AddCameraService){
   }

}
