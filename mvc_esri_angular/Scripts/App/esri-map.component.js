"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const angular2_esri_loader_1 = require("angular2-esri-loader");
let EsriMapComponent = class EsriMapComponent {
    constructor(esriLoader) {
        this.esriLoader = esriLoader;
    }
    ngOnInit() {
        // only load the ArcGIS API for JavaScript when this component is loaded
        return this.esriLoader.load({
            // use a specific version of the JSAPI
            url: 'https://js.arcgis.com/4.3/'
        }).then(() => {
            // load the needed Map and MapView modules from the JSAPI
            this.esriLoader.loadModules([
                'esri/Map',
                'esri/views/MapView'
            ]).then(([Map, MapView]) => {
                const mapProperties = {
                    basemap: 'hybrid'
                };
                const map = new Map(mapProperties);
                const mapViewProperties = {
                    // create the map view at the DOM element in this component
                    container: this.mapViewEl.nativeElement,
                    // supply additional options
                    center: [-12.287, -37.114],
                    zoom: 12,
                    map // property shorthand for object literal
                };
                this.mapView = new MapView(mapViewProperties);
            });
        });
    }
};
__decorate([
    core_1.ViewChild('mapViewNode'),
    __metadata("design:type", core_1.ElementRef)
], EsriMapComponent.prototype, "mapViewEl", void 0);
EsriMapComponent = __decorate([
    core_1.Component({
        selector: 'app-esri-map',
        templateUrl: './esri-map.component.html',
        styleUrls: ['./esri-map.component.css']
    }),
    __metadata("design:paramtypes", [angular2_esri_loader_1.EsriLoaderService])
], EsriMapComponent);
exports.EsriMapComponent = EsriMapComponent;
//# sourceMappingURL=esri-map.component.js.map