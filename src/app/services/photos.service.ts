import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';

import { PhotoModel } from '../models/photo.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable()
export class PhotosService {
  private photosUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(this.photosUrl).pipe(
      map((photos) => photos.slice(0, 100)) // Limit to 100 photos
    );
  }
}
