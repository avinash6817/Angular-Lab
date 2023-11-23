import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';
import { StringInterpolationDemoComponent } from './string-interpolation-demo/string-interpolation-demo.component';
import { TwoWayBindingDemoComponent } from './two-way-binding-demo/two-way-binding-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfDemoComponent,
    NgForDemoComponent,
    StringInterpolationDemoComponent,
    TwoWayBindingDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
