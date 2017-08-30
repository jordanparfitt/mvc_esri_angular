import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EsriLoaderService } from 'angular2-esri-loader';

import { AppComponent } from './app.component';
import { EsriMapComponent } from './esri.component';
@NgModule({
    imports: [BrowserModule, EsriLoaderService ],
    declarations: [AppComponent, EsriMapComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }