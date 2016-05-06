"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
// import {ContactListComponent} from 
var router_1 = require('angular2/router');
// import {NewContactComponent}
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n        <header>\n            <nav>\n                <a [routerLink]=\"['Contacts']\">Contacts</a>\n                <a [routerLink]=\"['NewContact']\">New Contact</a>\n            </nav>\n        </header>\n        <div class=\"main\">\n            <router-outlet></router-outlet>\n            <http-test></http-test>\n        </div>\n    ",
            directives: [ContactListComponent, HTTPTestComponent, ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true },
            { path: '/newontact', name: 'NewContact', component: NewContactComponent }
        ])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
