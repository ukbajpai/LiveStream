import { Component } from '@angular/core';
import { AddCameraService} from './add-camera.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LiveStream';
  cameraList : any = [];
  constructor(private service: AddCameraService){
    this.service.retrieveCamera().subscribe(value => this.cameraList = value);
    console.log(JSON.stringify(this.cameraList));
  }
  
}
