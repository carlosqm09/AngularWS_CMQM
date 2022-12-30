import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  fakeUsername: string = "Carlitos";
  fakePassword: string = "123456";
  constructor() { }

  login(username: string , password: string): Observable<any>{
    if(username === this.fakeUsername && password === this.fakePassword){
      localStorage.setItem("token", "mi-token-supersecreto")
      return of("OK")
    } else{
      return throwError(() => new Error("Error"));
      
    }

  }

  logout(): void {
    localStorage.removeItem("token");
  }

  isLoggedIn(): boolean{
    return localStorage.getItem("token") != null
  }

}
