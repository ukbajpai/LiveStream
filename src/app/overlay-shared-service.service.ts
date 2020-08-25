import { Injectable,  ComponentFactoryResolver,
  Inject,
  ReflectiveInjector, 
  ViewContainerRef} from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ParentOverlayComponent } from './parent-overlay/parent-overlay.component';
@Injectable({
  providedIn: 'root'
})
export class OverlaySharedServiceService {
  overlayStatus: boolean;
  _overlayStatus = new BehaviorSubject<boolean>(false);
  overlayItem: ParentOverlayComponent;
  _overlayItem = new BehaviorSubject<ParentOverlayComponent>(null);
  constructor() {
    this.overlayStatus = false;
    this._overlayStatus.next(this.overlayStatus);
    this._overlayItem.next(null);
   }


  updateOverlayStatus(val,parentOverlayItem) {
    this.overlayStatus = val;
    this._overlayStatus.next(this.overlayStatus);
    this.overlayItem = parentOverlayItem;
    this._overlayItem.next(this.overlayItem);
  }
}
