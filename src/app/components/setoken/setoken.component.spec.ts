import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetokenComponent } from './setoken.component';

describe('SetokenComponent', () => {
  let component: SetokenComponent;
  let fixture: ComponentFixture<SetokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
