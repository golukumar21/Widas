import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { environment } from '../../src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class AppService {
    constructor(private http: HttpClient) { }
    private apiURL = environment.baseUrl;

    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    private options = { headers: this.headers }

    public getBooks(): Observable<any> {
        return this.http.get(this.apiURL, this.options);
    }

    public searchByBookName(arg): Observable<any> {
        return this.http.get(this.apiURL + 'search/'+ arg, this.options);
    }

    public getBookDetails(arg): Observable<any> {
        return this.http.get(this.apiURL + 'books/'+ arg, this.options);
    }
}