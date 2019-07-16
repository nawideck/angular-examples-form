import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesEditPageComponent } from './examples-edit-page.component';

describe('ExamplesEditPageComponent', () => {
  let component: ExamplesEditPageComponent;
  let fixture: ComponentFixture<ExamplesEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplesEditPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
