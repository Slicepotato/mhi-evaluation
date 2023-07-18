import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  baseurl = 'https://dummy.restapiexample.com/api/v1';
  empList: any;
  scrub: any = [];

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  GetEmployees() {
    if( !localStorage.getItem('employeeList') ) {
      this.SetEmployees();
    } else {
      this.scrub = localStorage.getItem('employeeList');
      this.empList = JSON.parse(this.scrub);
    }

    return this.empList;
  }

  SetEmployees() {
    this.http.get(this.baseurl + '/employees').pipe(retry(0), catchError(this.errorHandl)).subscribe((data: any) => {
      localStorage.setItem('employeeList', JSON.stringify(data.data));
      this.empList = data.data;
    });
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
