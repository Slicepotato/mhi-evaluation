import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fetch } from './shared/fetch';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  baseurl = 'https://dummy.restapiexample.com/api/v1';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  GetEmployees(): Observable<Fetch> {
    return this.http
      .get<Fetch>(this.baseurl + '/employees')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  GetEmployee(id: string): Observable<Fetch> {
    return this.http
      .get<Fetch>(this.baseurl + '/employee/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
