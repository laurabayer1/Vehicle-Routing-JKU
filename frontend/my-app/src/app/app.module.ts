import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PersonComponent} from './person/person.component';
import {PersonService} from './services/person.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {TransportProviderComponent} from "./transport-provider/transport-provider.component";
import {TransportProviderService} from "./services/tranpsortProvider.service";
import { MatRadioModule } from '@angular/material/radio';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DropdownModule } from 'primeng/dropdown';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";





@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    TransportProviderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    MatRadioModule,
    LeafletModule,
    DropdownModule,
    BrowserAnimationsModule,

  ],
  providers: [PersonService, TransportProviderService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
