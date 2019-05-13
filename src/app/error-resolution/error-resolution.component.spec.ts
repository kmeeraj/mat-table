import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorResolutionComponent } from './error-resolution.component';

describe('ErrorResolutionComponent', () => {
  let component: ErrorResolutionComponent;
  let fixture: ComponentFixture<ErrorResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorResolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
