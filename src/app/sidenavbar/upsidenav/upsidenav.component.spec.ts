import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsidenavComponent } from './upsidenav.component';

describe('UpsidenavComponent', () => {
  let component: UpsidenavComponent;
  let fixture: ComponentFixture<UpsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpsidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
