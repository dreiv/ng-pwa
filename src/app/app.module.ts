import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js')
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
