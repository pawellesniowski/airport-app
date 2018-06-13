import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Passenger} from '../dashboard/models/passenger.interface';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PassengerDashboardService {

  configUrl = 'http://localhost:3000/passengers';

  constructor(private http: HttpClient) {}

  getPassengers() {
    return this.http.get<Passenger[]>(this.configUrl);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    console.log('updating...', passenger);
    return this.http.put<Passenger>(this.configUrl + `/${passenger.id}`, passenger)
      .pipe(
        catchError(err => console.log(err))
      );
  }


}
