import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonViewerComponent } from './json-viewer.component';
import { PrettyJsonPipePipe } from '../../pipes/pretty-json-pipe/pretty-json-pipe.pipe';

describe('JsonViewerComponent', () => {
  let component: JsonViewerComponent;
  let fixture: ComponentFixture<JsonViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JsonViewerComponent, PrettyJsonPipePipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
