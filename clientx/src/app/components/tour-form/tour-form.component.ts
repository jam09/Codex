import { Component, OnInit, HostBinding } from '@angular/core';

import { Tour} from 'src/app/model/Tour';
import { Reserva} from 'src/app/model/Reserva'; 
import { ToursService} from 'src/app/services/tours.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.css']
})
export class TourFormComponent implements OnInit {

  @HostBinding('class')  classes = 'row';

  tour: Tour = {
    id: 0,
    title: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    children: 0,
    created_ad: new Date()
  };

  reserva: Reserva = {
    id: 0,
    nombre: '',
    apellido: '',
    personas: 0,
    children: 0,
    idtour: 0,
    created: new Date,
    correo: ''
  }
    
  data : any = [];

  totaly: number;
  varx: number;
  vary: number;

  edit: boolean = false;

  constructor( private toursService:ToursService ,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.toursService.getTour(params.id).subscribe(
        res => {
          console.log(res);
          this.tour = res;
        },
        err => console.log(err)
      )
    }
  }

  saveReserva() {
    delete this.reserva.created;
    delete this.reserva.id;
    const idtours = this.tour.id;
    this.reserva.idtour = idtours;

    console.log(this.reserva);
    /*
    this.toursService.saveReservas(this.reserva)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/tours']);
        },
        err => console.error(err)
      )*/
  }

  cotizarTour(){
    const varxx:number = this.varx;
    const varyy:number = this.vary;
    
    const dato:number = this.tour.precio;
    const child:number = this.tour.children; 
    
    const pers:number = varxx*dato;
    const childd:number = varyy*child;

    this.totaly = pers+childd;

    console.log(pers,childd,"total =",this.totaly);
  }

}
