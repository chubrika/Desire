import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router"; 
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http"; 
// Pages


// app modules/components
import { NavigationModule } from "../../views/common/navigation/navigation.module";
import { FooterModule } from "../../views/common/footer/footer.module"; 

@NgModule({
    declarations: [ 
        // HomeComponent, 
    ],
    imports: [
        // angular modules
        BrowserModule,
        HttpModule,
        // modules
        NavigationModule,
        FooterModule, 
        RouterModule
    ] 
})

export class PagesModule { }