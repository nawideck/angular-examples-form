import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesFormPageComponent } from './examples-form.component';

describe('ExamplesFormPageComponent', () => {
  let component: ExamplesFormPageComponent;
  let fixture: ComponentFixture<ExamplesFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplesFormPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
