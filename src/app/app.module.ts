import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VinComponent } from './vin/vin.component';
import { NameComponent } from './name/name.component';
import { TelComponent } from './tel/tel.component';
import { AddressComponent } from './address/address.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    VinComponent,
    NameComponent,
    TelComponent,
    AddressComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
