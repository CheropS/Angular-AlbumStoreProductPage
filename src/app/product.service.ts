import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs';
import { tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).pipe(
      tap(data=> console.log('All: ', JSON.stringify(data))),
      
    )
  }
  
}
