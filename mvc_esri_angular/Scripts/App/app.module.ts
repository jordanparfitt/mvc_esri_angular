import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { EsriMapComponent } from "./esri/esri.component";
import Map from 'esri/Map';

@NgModule({
    imports: [BrowserModule ],
    declarations: [EsriMapComponent, AppComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }