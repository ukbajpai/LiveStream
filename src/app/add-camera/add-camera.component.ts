import { Component, OnInit } from '@angular/core';
import { ParentOverlayComponent } from '../parent-overlay/parent-overlay.component';
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { AddCameraService} from '../add-camera.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-add-camera',
  templateUrl: './add-camera.component.html',
  styleUrls: ['./add-camera.component.css']
})
export class AddCameraComponent  implements OnInit {
  cam_form: FormGroup;
  constructor(private service : AddCameraService, private router: Router,
    private fb : FormBuilder, private route: ActivatedRoute) { 
    this.cam_form = this.fb.group({
      camIp: [''],
      camName : ['']
      
    })
  }

  ngOnInit() {
    
  }
  onSubmit(value) {
    if (this.cam_form.valid) {
      this.service.addCamera(this.cam_form.value).subscribe(value => alert("Camera Added"));
      this.router.navigate(['/']);
    }
  }
  closeNav(){
    this.router.navigate(['/']);
  }
}
