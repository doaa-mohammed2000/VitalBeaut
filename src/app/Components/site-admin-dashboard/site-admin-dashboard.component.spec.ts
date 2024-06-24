import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAdminDashboardComponent } from './site-admin-dashboard.component';

describe('SiteAdminDashboardComponent', () => {
  let component: SiteAdminDashboardComponent;
  let fixture: ComponentFixture<SiteAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteAdminDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
