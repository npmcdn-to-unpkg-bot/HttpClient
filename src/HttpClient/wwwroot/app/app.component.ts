import {Component} from 'angular2/core';
// import {ContactListComponent} from 
import {RouteConfig} from 'angular2/router';
// import {NewContactComponent}

@Component({
    selector: 'app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['Contacts']">Contacts</a>
                <a [routerLink]="['NewContact']">New Contact</a>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
            <http-test></http-test>
        </div>
    `,
    directives: [ContactListComponent, HTTPTestComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true },
    { path: '/newontact', name: 'NewContact', component: NewContactComponent }
])
export class AppComponent {
}