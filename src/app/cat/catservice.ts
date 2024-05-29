import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Cat {
  id: number;
  name: string;
  origin: string;
  temperament: string;
  colors: string[];
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private apiUrl = 'https://freetestapi.com/api/v1/cats';

  constructor(private http: HttpClient) { }

  getCat(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.apiUrl);
  }

  searchCat(query: string): Observable<Cat[]> {
    const url = `https://freetestapi.com/api/v1/cats?search=${query}`;
    return this.http.get<Cat[]>(url);
  }
}
