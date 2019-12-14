import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplesModule } from './features/examples/examples.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PhoneValidatorDirective } from './ui/directives/validators/phone-validator.directive';

@NgModule({
  declarations: [AppComponent, PhoneValidatorDirective],
  imports: [BrowserModule, AppRoutingModule, ExamplesModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
