import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Izdelek } from '../models/izdelek';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Kategorija } from '../models/kategorija';
import { Trgovina } from '../models/trgovina';


@Injectable()
export class IzdelkiService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/izdelki';
    private url_kategorije = 'http://localhost:8080/v1/kategorije';
    private url_trgovine = 'http://localhost:8080/v1/trgovine';

    constructor(private http: HttpClient) {
    }

    getIzdelki(): Observable<Izdelek[]> {
        return this.http.get<Izdelek[]>(this.url)
                        .pipe(catchError(this.handleError));
    }

    getIzdelek(id: number): Observable<Izdelek> {
        const url = `${this.url}/${id}`;
        return this.http.get<Izdelek>(url)
                        .pipe(catchError(this.handleError));
    }

    getKategorije(): Observable<Kategorija[]> {
        return this.http.get<Kategorija[]>(this.url_kategorije)
                        .pipe(catchError(this.handleError));
    }

    getTrgovine(): Observable<Trgovina[]> {
        return this.http.get<Trgovina[]>(this.url_trgovine)
                        .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<number> {
        const url = `${this.url}/${id}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    create(izdelek: Izdelek): Observable<Izdelek> {
        console.log("Izdelek: " + JSON.stringify(izdelek))
        return this.http.post<Izdelek>(this.url, JSON.stringify(izdelek), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

