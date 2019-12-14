import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFieldMessagesComponent } from './error-field-messages.component';
import { FormControl, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

fdescribe('ErrorFieldMessagesComponent', () => {
  let fixture: ComponentFixture<ErrorFieldMessagesComponent>;
  let component: ErrorFieldMessagesComponent;
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
    // const fixture: ComponentFixture<ErrorFieldMessagesComponent> = TestBed.createComponent(ErrorFieldMessagesComponent);
    // const component: ErrorFieldMessagesComponent = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Test validator email', () => {
    const fc = new FormControl('set invalid value', [Validators.email]);
    component.fc = fc;

    expect(component.getFieldErrors().length).toEqual(1);
    expect(component.getFieldErrors()[0].name).toBe('email');
    expect(component.getFieldErrors()[0].info).not.toBeNull();
  });

  it('Test validator max value', () => {
    const fc = new FormControl(6, [Validators.max(4)]);
    component.fc = fc;

    expect(component.getFieldErrors().length).toEqual(1);
    expect(component.getFieldErrors()[0].name).toBe('max');
    expect(component.getFieldErrors()[0].info).not.toBeNull();
  });

  it('Test validator max length value', () => {
    const fc = new FormControl('long string', [Validators.maxLength(5)]);
    component.fc = fc;

    expect(component.getFieldErrors().length).toEqual(1);
    expect(component.getFieldErrors()[0].name).toBe('maxlength');
    expect(component.getFieldErrors()[0].info).not.toBeNull();
  });

  it('Test validator min value', () => {
    const fc = new FormControl(2, [Validators.min(4)]);
    component.fc = fc;

    expect(component.getFieldErrors().length).toEqual(1);
    expect(component.getFieldErrors()[0].name).toBe('min');
    expect(component.getFieldErrors()[0].info).not.toBeNull();
  });

  it('Test validator min length value', () => {
    const fc = new FormControl('short', [Validators.minLength(8)]);
    component.fc = fc;

    expect(component.getFieldErrors().length).toEqual(1);
    expect(component.getFieldErrors()[0].name).toBe('minlength');
    expect(component.getFieldErrors()[0].info).not.toBeNull();
  });

  it('Test validator invalid pattern', () => {
    const fc = new FormControl('78', [Validators.pattern('^[a-zA-Z]+$')]);
    component.fc = fc;

    expect(component.getFieldErrors().length).toEqual(1);
    expect(component.getFieldErrors()[0].name).toBe('pattern');
    expect(component.getFieldErrors()[0].info).not.toBeNull();
  });

  it('Test validator required', () => {
    const fc = new FormControl('', [Validators.required]);
    component.fc = fc;

    expect(component.getFieldErrors().length).toEqual(1);
    expect(component.getFieldErrors()[0].name).toBe('required');
    expect(component.getFieldErrors()[0].info).not.toBeNull();
  });
});
