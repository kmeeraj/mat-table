import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinirowComponent } from './minirow.component';

describe('MinirowComponent', () => {
  let component: MinirowComponent;
  let fixture: ComponentFixture<MinirowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinirowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinirowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
