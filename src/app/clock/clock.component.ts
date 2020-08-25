import { Component, OnInit, NgZone, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  public count: number = 0;

  @ViewChild('counter')
  public myCounter: ElementRef;
  constructor(private zone: NgZone, private renderer: Renderer2) {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.renderer.setProperty(this.myCounter.nativeElement, 'textContent', ++this.count);
      }, 1);
    });
   }

  ngOnInit() {
  }

}
