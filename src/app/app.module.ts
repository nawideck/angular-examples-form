import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplesModule } from './features/examples/examples.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PhoneValidatorDirective } from './ui/directives/validators/phone-validator.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigService } from './core/config/services/config.service';

@NgModule({
  declarations: [AppComponent, PhoneValidatorDirective],
  imports: [BrowserModule, AppRoutingModule, ExamplesModule, HttpClientModule, CommonModule, BrowserAnimationsModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigService.factory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
