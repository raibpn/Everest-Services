import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KokkenComponent } from './kokken.component';

describe('KokkenComponent', () => {
  let component: KokkenComponent;
  let fixture: ComponentFixture<KokkenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KokkenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KokkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
