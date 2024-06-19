import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbdateComponent } from './ubdate.component';

describe('UbdateComponent', () => {
  let component: UbdateComponent;
  let fixture: ComponentFixture<UbdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UbdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
