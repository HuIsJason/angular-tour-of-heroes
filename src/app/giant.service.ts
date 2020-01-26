import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Giant } from './Giant';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root' // this 'root' is the injector of this service
})
export class GiantService {

  private giantsUrl = 'api/heroes'; // URL to the web API where the data we want is stored

  constructor(private messageService: MessageService, private http: HttpClient) { } // basically a service is using another service ATM

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET hero by id. Will 404 if id not found */
  getGiant(id: number): Observable<Giant> {
    const url = `${this.giantsUrl}/${id}`; // constructing a URL request by giant id
    return this.http.get<Giant>(url).pipe( // we "pipe" the Observable into an RxJS catcherError() operator
      tap(_ => this.log(`fetched giant id=${id}`)),
      catchError(this.handleError<Giant>(`getGiant id=${id}`))
    );
  }

    /** GET heroes from the server */
  getGiants (): Observable<Giant[]> {
    return this.http.get<Giant[]>(this.giantsUrl)
      .pipe( // "piping" the Observable (in the pipe, tap() happens on success, catchError() occurs on errors)
        tap(_ => this.log('fetched giants (from tap')),
        catchError(this.handleError<Giant[]>('getGiants', [])) // handleError() is passed to catchError, where it
                                                               // reports the error, returns something valid
                                                               // to keep the application running
        // catchErro() intercepts Observables that have failed, and provides an error handler to handler what happens
      );
  }

  /** PUT: update the hero on the server */
  updateGiant (giant: Giant): Observable<any> {
    // http.put() takes (URL of where to update, data object to update, options)
    return this.http.put(this.giantsUrl, giant, this.httpOptions).pipe(
      tap(_ => this.log(`updated giant id=${giant.id}`)),
      catchError(this.handleError<any>('updateGiant'))
    );
  }

  private log(message: string) {
    this.messageService.add(`GiantService: ${message}`);
  }

    /** POST: add a new hero to the server */
  addGiant (hero: Giant): Observable<Giant> {
    return this.http.post<Giant>(this.giantsUrl, hero, this.httpOptions).pipe(
      tap((newGiant: Giant) => this.log(`added giant w/ id=${newGiant.id}`)),
      catchError(this.handleError<Giant>('Giant'))
    );
  }

    /** DELETE: delete the hero from the server */
  deleteGiant (giant: Giant | number): Observable<Giant> {
    const id = typeof giant === 'number' ? giant : giant.id;
    const url = `${this.giantsUrl}/${id}`;

    return this.http.delete<Giant>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted giant id=${id}`)),
      catchError(this.handleError<Giant>('deleteGiant'))
    );
  }

    /* GET heroes whose name contains search term */
  searchGiants(term: string): Observable<Giant[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Giant[]>(`${this.giantsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found giants matching "${term}"`)),
      catchError(this.handleError<Giant[]>('searchGiants', []))
    );
  }
}
