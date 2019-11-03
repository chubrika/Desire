import { Component } from '@angular/core';

@Component({
    selector: 'langs',
    templateUrl: 'langs.template.html',
})
export class LangsComponent {
    langs: any[];
    constructor() { }
    ngOnInit() {
        this.langs = [
            { langValue: 'KA' },
            { langValue: 'EN' }
        ];
    }
    changeLanguage(value: any) {
      
    }
}