import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCameraComponent } from './add-camera/add-camera.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'addcam', component: AddCameraComponent },
  {path: '', component: DashboardComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
