import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCreaturesComponent } from './active-creatures.component';

describe('ActiveCreaturesComponent', () => {
  let component: ActiveCreaturesComponent;
  let fixture: ComponentFixture<ActiveCreaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveCreaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCreaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
