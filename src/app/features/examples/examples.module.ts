import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesEditPageComponent } from './pages/examples-edit-page/examples-edit-page.component';
import { ExamplesFormPageComponent } from './components/examples-form/examples-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonViewerComponent } from 'src/app/ui/components/json-viewer/json-viewer.component';
import { PrettyJsonPipePipe } from 'src/app/ui/pipes/pretty-json-pipe/pretty-json-pipe.pipe';

@NgModule({
  declarations: [ExamplesEditPageComponent, ExamplesFormPageComponent, JsonViewerComponent, PrettyJsonPipePipe],
  imports: [CommonModule, ExamplesRoutingModule, ReactiveFormsModule]
})
export class ExamplesModule {}
