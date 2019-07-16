import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesEditPageComponent } from './pages/examples-edit-page/examples-edit-page.component';

const routes: Routes = [{ path: 'examples', component: ExamplesEditPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
