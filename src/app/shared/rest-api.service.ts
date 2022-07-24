import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { carSales, Employee } from '../shared/employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  apiURL = 'http://localhost:8000/api/sales';

  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<carSales> {
    return this.http
      .get<carSales>(this.apiURL + '/list/')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id: any): Observable<carSales> {
    return this.http
      .get<carSales>(this.apiURL + '/detailcustomer/' + id + '/')
      .pipe(retry(1), catchError(this.handleError));
  }
  getEmployeebySales(id: any): Observable<carSales> {
    return this.http
      .get<carSales>(this.apiURL + '/detailbyid/' + id + '/')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create employee
  createEmployee(employee: any): Observable<carSales> {
    return this.http
      .post<carSales>(
        this.apiURL + '/create',
        JSON.stringify(employee),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update employee
  updateEmployee(id: any, employee: any): Observable<carSales> {
    return this.http
      .put<carSales>(
        this.apiURL + '/update/' + id + '/',
        //'http://localhost:8000' + '/api/sales/update/' + id,
        JSON.stringify(employee),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id: any) {
    return this.http
      .delete<carSales>(this.apiURL + '/delete/' + id + '/', this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  searchbySales(id: any) {
    return this.http
      .get<carSales>(this.apiURL + '/detailbyid/' + id + '/')
      .pipe(retry(1), catchError(this.handleError));
  }

  searchbyCustomer(id: any) {
    return this.http
      .get<carSales>(this.apiURL + '/detailcustomer/' + id + '/')
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
