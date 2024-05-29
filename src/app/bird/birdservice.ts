import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface Bird {
  id: number;
  name: string;
  species: string;
  family: string;
  habitat: string;
  place_of_found: string;
  diet: string;
  description: string;
  weight_kg: number;
  height_cm: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  private apiUrl = 'https://freetestapi.com/api/v1/birds';

  constructor(private http: HttpClient) { }

  getBird(): Observable<Bird[]> {
    return this.http.get<Bird[]>(this.apiUrl);
  }

  searchBirds(query: string): Observable<Bird[]> {
    const url = `https://freetestapi.com/api/v1/birds?search=${query}`;
    return this.http.get<Bird[]>(url);
  }
}
