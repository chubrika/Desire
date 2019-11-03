import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation.component";

import { LangsComponent } from "../langs/langs.component";
@NgModule({
    declarations: [NavigationComponent, LangsComponent],
    imports: [BrowserModule, RouterModule],
    exports: [NavigationComponent],
})

export class NavigationModule { }