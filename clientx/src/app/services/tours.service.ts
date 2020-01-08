import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Tour} from '../model/Tour';
import { Reserva} from '../model/Reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  API_URL = 'http://localhost:3100/api';

  constructor(private http: HttpClient) { }

  getTours() {
    return this.http.get (`${this.API_URL}/tours`);
  }
  getTour(id: string) {
    return this.http.get(`${this.API_URL}/tours/${id}`);
  }
  saveReservas(reserva: Reserva ) {
    return this.http.post(`${this.API_URL}/tours`, reserva);
  }
  deleteTour(id: string) {
    return this.http.delete(`${this.API_URL}/tours/${id}`);
  }
  updateTour(id: string, updateTour: Tour): Observable <Tour> {
    return this.http.put(`${this.API_URL}/tours/${id}`, updateTour);
  }

}
