import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent {
    showMenu: boolean = false;
    constructor(public el: ElementRef, private router: Router) { }

    ngAfterViewInit() {
    }

    clickRoute() {
        this.showMenu = false;
    }
    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }
    scrollTop() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }

}