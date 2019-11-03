import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.template.html'
})
export class HomeComponent {
    homeView: string;
    shareView = false;
    constructor() {
        this.homeView = 'home';
    }
    ngOnInit() {

    }
    public changeView(value: string) {
        this.homeView = value;
    }

    public share(value:boolean) {
        console.log(value);
        this.shareView = value;
        if(value===true){
            document.body.style.backgroundColor= "#e1e1e1"
        } else {
            document.body.style.backgroundColor="white"
        }
    }
}