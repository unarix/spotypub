import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaypubComponent } from './playpub.component';

describe('PlaypubComponent', () => {
  let component: PlaypubComponent;
  let fixture: ComponentFixture<PlaypubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaypubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaypubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
