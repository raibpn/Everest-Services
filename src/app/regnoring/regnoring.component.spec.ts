import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegnoringComponent } from './regnoring.component';

describe('RegnoringComponent', () => {
  let component: RegnoringComponent;
  let fixture: ComponentFixture<RegnoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegnoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegnoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
