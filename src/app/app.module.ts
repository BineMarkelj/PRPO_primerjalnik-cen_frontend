import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {IzdelkiComponent} from './seznami/izdelki.component';
import {IzdelekDodajComponent} from './seznami/izdelek-dodaj.component';
import {IzdelekPodrobnostiComponent} from './seznami/izdelek-podrobnosti.component';
import {IzdelkiService} from './seznami/services/izdelki.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        IzdelkiComponent,
        IzdelekPodrobnostiComponent,
        IzdelekDodajComponent
    ],
    providers: [IzdelkiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

