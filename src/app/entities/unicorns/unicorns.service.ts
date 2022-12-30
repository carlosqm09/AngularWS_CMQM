import { Observable } from 'rxjs';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http'
import { AppConstants } from './../../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnicornsService {
  private resourceUrl = AppConstants.API_BASE_URL;
  private resourceID = AppConstants.API_ID;
  constructor(private http: HttpClient) { }

  queryUnicorns(): Observable<HttpResponse<any[]>>{
    return this.http.get<any[]>(this.resourceUrl+'/'+this.resourceID+'/unicorns', {observe:'response'});
  }

  getUnicorn(id:string): Observable<HttpResponse<any[]>>{
    return this.http.get<any[]>(this.resourceUrl+'/'+this.resourceID+'/unicorns/'+id, {observe:'response'});
  }

  postUnicorn(unicorn: any): Observable<HttpResponse<any[]>>{
    const httpHEaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any[]>(this.resourceUrl+'/'+this.resourceID+'/unicorns', unicorn, { headers: httpHEaders, observe:'response'});
  } 

  putUnicorn(unicorn: any, id: string): Observable<HttpResponse<any[]>>{
    const httpHEaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    delete(unicorn._id);
    return this.http.put<any[]>(this.resourceUrl+'/'+this.resourceID+'/unicorns/' + id, unicorn, { headers: httpHEaders, observe:'response'});
  }

  deleteUnicorn(id:string): Observable<HttpResponse<any[]>>{
    return this.http.delete<any[]>(this.resourceUrl+'/'+this.resourceID+'/unicorns/'+id, {observe:'response'});
  }

}
