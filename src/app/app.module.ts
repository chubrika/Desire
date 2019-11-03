import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { ROUTES } from "./app.routes";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import { PagesModule } from './Pages/pages.module'
// App views 



import { HomeComponent } from "./pages/home/home.component";
// App modules/components
import { NavigationModule } from "../views/common/navigation/navigation.module";
import { FooterModule } from "../views/common/footer/footer.module";

import { CarouselComponent } from "../views/common/carousel/carousel.commponent";
// Angular Animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CarouselComponent,
    ],
    imports: [
        // Angular modules
        BrowserModule,
        HttpModule,
        PagesModule,
        // Modules
        NavigationModule,
        FooterModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        CarouselComponent
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})

export class AppModule { }