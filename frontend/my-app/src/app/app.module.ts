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
import { AddressComponent } from './address/address.component';
import {AddressService} from "./services/address.service";


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    TransportProviderComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    MatRadioModule,
    LeafletModule
  ],
  providers: [PersonService, TransportProviderService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
