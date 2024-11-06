import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

interface City {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities: City[] = [];
  private citiesUrl = 'assets/cities.json';

  constructor(private http: HttpClient) {}

  loadCities(): Observable<City[]> {
    const storedCities = localStorage.getItem('cities');
    if (storedCities) {
      this.cities = JSON.parse(storedCities);
      return of(this.cities);
    } else {
      return this.http.get<City[]>(this.citiesUrl).pipe(
        tap(cities => {
          this.cities = cities;
          localStorage.setItem('cities', JSON.stringify(this.cities));
        })
      );
    }
  }

  getCities(): City[] {
    return this.cities;
  }

  addCity(name: string): { success: boolean; message?: string } {
    if (this.cities.find(city => city.name.toLowerCase() === name.toLowerCase())) {
      return { success: false, message: 'City name already exists' };
    }
    const newCity: City = { id: this.cities.length + 1, name };
    this.cities.push(newCity);
    localStorage.setItem('cities', JSON.stringify(this.cities));
    return { success: true };
  }

  deleteCity(name: string): void {
    this.cities = this.cities.filter(city => city.name !== name);
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }

  filterCities(query: string): City[] {
    return this.cities.filter(city => city.name.toLowerCase().includes(query.toLowerCase()));
  }
}
