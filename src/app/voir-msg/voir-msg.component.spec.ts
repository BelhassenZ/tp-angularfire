import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirMsgComponent } from './voir-msg.component';

describe('VoirMsgComponent', () => {
  let component: VoirMsgComponent;
  let fixture: ComponentFixture<VoirMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
