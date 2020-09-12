import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCameraService {

  apiUrl: string = "https://backend-anter.herokuapp.com";
 
  constructor(private http: HttpClient) { }

  addCamera (camera: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"/savecam", camera);
  }

  retrieveCamera (): Observable<any> {
    return this.http.get(this.apiUrl+"/getcam");
  }
}
