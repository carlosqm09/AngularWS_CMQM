import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  private resourceUrl = AppConstants.API_BASE_URL;
  private resourceID = AppConstants.API_ID;
  public unicornsSubject = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  // GET
  getUnicorns(): Observable<HttpResponse<any>> {
    return this.http
      .get<any>(`${this.resourceUrl}/${this.resourceID}/unicorns`, {
        observe: 'response',
      })
      .pipe(
        tap((unicorns) => {
          this.unicornsSubject.next(unicorns.body);
          console.log(unicorns.body);
        })
      );
  }

  // GET BY ID
  getUnicorn(id: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      `${this.resourceUrl}/${this.resourceID}/unicorns/${id}`,
      {
        observe: 'response',
      }
    );
  }

  // POST
  postUnicorn(unicorn: any): Observable<HttpResponse<any>> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(
      `${this.resourceUrl}/${this.resourceID}/unicorns`,
      unicorn,
      {
        headers: httpHeaders,
        observe: 'response',
      }
    );
  }

  // PUT
  putUnicorn(unicorn: any, id: string): Observable<HttpResponse<any>> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    delete unicorn._id;
    return this.http.put<any>(
      `${this.resourceUrl}/${this.resourceID}/unicorns/${id}`,
      unicorn,
      {
        headers: httpHeaders,
        observe: 'response',
      }
    );
  }

  // DELETE
  deleteUnicorn(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(
      `${this.resourceUrl}/${this.resourceID}/unicorns/${id}`,
      {
        observe: 'response',
      }
    );
  }
}
