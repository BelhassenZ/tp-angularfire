import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererMsgComponent } from './gerer-msg.component';

describe('GererMsgComponent', () => {
  let component: GererMsgComponent;
  let fixture: ComponentFixture<GererMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
