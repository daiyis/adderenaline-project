import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomToggleComponent } from './zoom-toggle.component';

describe('ZoomToggleComponent', () => {
  let component: ZoomToggleComponent;
  let fixture: ComponentFixture<ZoomToggleComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ZoomToggleComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
