import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOverlayComponent } from './parent-overlay.component';

describe('ParentOverlayComponent', () => {
  let component: ParentOverlayComponent;
  let fixture: ComponentFixture<ParentOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
