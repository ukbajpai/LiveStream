import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCameraService {

  apiUrl: string = "https://camera-uk.getsandbox.com:443/addCamera";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) { }

  addCamera (camera: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, camera, this.httpOptions);
  }

  retrieveCamera (): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
