import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TourFormComponent } from './components/tour-form/tour-form.component';
import { TourListComponent } from './components/tour-list/tour-list.component';

import { ToursService} from './services/tours.service';
import { HotelesService} from './services/hoteles.service';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TourFormComponent,
    TourListComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ToursService,
    HotelesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
