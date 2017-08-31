import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EsriLoaderService } from 'angular2-esri-loader';
import { AppComponent } from './app.component';
import {EsriMapComponent} from "./esri/esri.component";

@NgModule({
    imports: [BrowserModule, EsriLoaderService ],
    declarations: [AppComponent, EsriMapComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }