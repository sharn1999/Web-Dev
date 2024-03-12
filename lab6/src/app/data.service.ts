import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { albumData, albumImg } from './inteface';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  getData(): Observable<albumData[]> {
    return this.http.get<albumData[]>(`${this.url}`);
  }

  getImg(id: number): Observable<albumImg[]> {
    return this.http.get<albumImg[]>(`${this.url}/${id}/photos`);
  }

  getElemById(id: number){
    return this.http.get<albumData>(`${this.url}/${id}`);
  }

  removeData(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  updateData(albumEl: albumData){
    return this.http.patch(`${this.url}/${albumEl.id}`, albumEl);
  }

}
