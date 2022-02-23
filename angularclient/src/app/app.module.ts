import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StringoneListComponent } from './stringone/stringone-list/stringone-list.component';
import {StringoneService} from "./stringone/stringone.service";


@NgModule({
  declarations: [
    AppComponent,
    StringoneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StringoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
