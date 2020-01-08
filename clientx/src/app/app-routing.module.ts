import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourListComponent} from './components/tour-list/tour-list.component';
import { TourFormComponent} from './components/tour-form/tour-form.component';
import { HotelListComponent} from './components/hotel-list/hotel-list.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'tours',
    pathMatch: 'full'
  },{
    path: 'tours',
    component: TourListComponent
  },{
    path: 'tours/reserva',
    component: TourFormComponent
  },{
    path: 'hoteles',
    component: HotelListComponent
  },{
    path: 'tours/reserva/:id',
    component: TourFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
