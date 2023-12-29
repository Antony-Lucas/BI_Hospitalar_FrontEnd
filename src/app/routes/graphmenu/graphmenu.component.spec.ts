import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphmenuComponent } from './graphmenu.component';

describe('GraphmenuComponent', () => {
  let component: GraphmenuComponent;
  let fixture: ComponentFixture<GraphmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
