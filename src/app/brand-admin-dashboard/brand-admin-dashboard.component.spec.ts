import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAdminDashboardComponent } from './brand-admin-dashboard.component';

describe('BrandAdminDashboardComponent', () => {
  let component: BrandAdminDashboardComponent;
  let fixture: ComponentFixture<BrandAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandAdminDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
