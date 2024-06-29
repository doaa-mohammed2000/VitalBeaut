import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSpecialServicesComponent } from './our-special-services.component';

describe('OurSpecialServicesComponent', () => {
  let component: OurSpecialServicesComponent;
  let fixture: ComponentFixture<OurSpecialServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurSpecialServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurSpecialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
