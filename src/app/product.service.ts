import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs';
import { Observable, tap } from 'rxjs';
import { Album } from './album';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get<Album>(this._albumUrl).pipe(
      tap(data=> console.log('All: ', JSON.stringify(data))),
      
    )
  }
  
}
