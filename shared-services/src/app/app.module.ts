import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';


@NgModule({
    declarations : [
      AppComponent,
      FirstcomponentComponent,
      SecondcomponentComponent
    ],
    imports : [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})


export class AppModule { }   