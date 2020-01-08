import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hotel } from '../model/Hotel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  API_URLX = 'http://ac7f8b9c.ngrok.io/api';

  constructor(private http: HttpClient) { }

  getHoteles() {
    return this.http.get (`${this.API_URLX}/tours`);
  }
  getHotel(id: string) {
    return this.http.get(`${this.API_URLX}/tours/${id}`);
  }
  saveHotel(hotel: Hotel) {
    return this.http.post(`${this.API_URLX}/tours`, hotel);
  }
  deleteHotel(id: string) {
    return this.http.delete(`${this.API_URLX}/tours/${id}`);
  }
  updateHotel(id: string, updateHotel: Hotel): Observable <Hotel> {
    return this.http.put(`${this.API_URLX}/tours/${id}`, updateHotel);
  }

}
