import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExamplesFormPageComponent } from './examples-form.component';
import { JsonViewerComponent } from 'src/app/ui/components/json-viewer/json-viewer.component';
import { PrettyJsonPipePipe } from 'src/app/ui/pipes/pretty-json-pipe/pretty-json-pipe.pipe';

describe('ExamplesFormPageComponent', () => {
  let component: ExamplesFormPageComponent;
  let fixture: ComponentFixture<ExamplesFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplesFormPageComponent, JsonViewerComponent, PrettyJsonPipePipe],
      imports: [FormsModule, ReactiveFormsModule]
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
