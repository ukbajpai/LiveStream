import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OverlayComponent } from './overlay/overlay.component';
import { ParentOverlayComponent } from './parent-overlay/parent-overlay.component';
import { AddCameraComponent } from './add-camera/add-camera.component';
import { DynamicOverlayDirective } from './dynamic-overlay.directive';
import { AddContributorComponent } from './add-contributor/add-contributor.component';
import { UserOptionsComponent } from './user-options/user-options.component';
import { ClockComponent } from './clock/clock.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverlayComponent,
    AddCameraComponent,
    DynamicOverlayDirective,
    AddContributorComponent,
    UserOptionsComponent,
    ClockComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [ 
    AddCameraComponent, 
    AddContributorComponent, 
    UserOptionsComponent,
    ServiceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
