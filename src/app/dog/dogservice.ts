import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Dog {
  id: number;
  name: string;
  breed_group: string;
  size: string;
  lifespan: string;
  origin: string;
  temperament: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private apiUrl = 'https://freetestapi.com/api/v1/dogs';

  constructor(private http: HttpClient) {}

  getDog(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl);
  }

  searchDogs(query: string): Observable<Dog[]> {
    const url = `https://freetestapi.com/api/v1/dogs?search=${query}`;
    return this.http.get<Dog[]>(url);
  }
}
