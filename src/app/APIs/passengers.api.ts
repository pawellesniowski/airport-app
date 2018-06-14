import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Passenger} from '../dashboard/models/passenger.interface';



@Injectable()
export class PassengerDashboardService {

  configUrl = 'http://localhost:3000/passengers';

  constructor(private http: HttpClient) {}

  getPassenger(id: number) {
    return this.http.get<Passenger>(this.configUrl + `/${id}`);
  }

  getPassengers() {
    return this.http.get<Passenger[]>(this.configUrl);
  }

  updatePassenger(passenger: Passenger) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const httpOptions = {
      headers
    };
    return this.http.put<Passenger>(this.configUrl + `/${passenger.id}`, passenger, httpOptions);
  }

  deletePassenger(passenger: Passenger) {
    return this.http.delete(this.configUrl + `/${passenger.id}`);
  }


}
