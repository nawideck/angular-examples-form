import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFieldMessagesComponent } from './error-field-messages.component';

describe('ErrorFieldMessagesComponent', () => {
  let component: ErrorFieldMessagesComponent;
  let fixture: ComponentFixture<ErrorFieldMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorFieldMessagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFieldMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
