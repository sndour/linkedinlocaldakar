import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoggedComponent } from './admin-logged.component';

describe('AdminLoggedComponent', () => {
  let component: AdminLoggedComponent;
  let fixture: ComponentFixture<AdminLoggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
