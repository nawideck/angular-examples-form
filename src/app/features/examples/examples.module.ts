import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesEditPageComponent } from './pages/examples-edit-page/examples-edit-page.component';
import { ExamplesFormPageComponent } from './components/examples-form/examples-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExamplesEditPageComponent, ExamplesFormPageComponent],
  imports: [CommonModule, ExamplesRoutingModule, ReactiveFormsModule]
})
export class ExamplesModule {}
