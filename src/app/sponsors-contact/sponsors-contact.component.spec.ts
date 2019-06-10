import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsContactComponent } from './sponsors-contact.component';

describe('SponsorsContactComponent', () => {
  let component: SponsorsContactComponent;
  let fixture: ComponentFixture<SponsorsContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
