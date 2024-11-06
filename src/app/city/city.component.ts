import { CityService } from '../city.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { Component, OnInit } from '@angular/core';

interface City {
  id: number;
  name: string;
}

@Component({
  selector: 'app-city',
  standalone: true, 
  imports: [CommonModule, FormsModule, ErrorMessageComponent],
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})

export class CityComponent implements OnInit {
  cities: City[] = [];  
  newCityName: string = '';
  filterQuery: string = '';
  errorMessage: string = '';

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cityService.loadCities().subscribe((cities: City[]) => {
      this.cities = cities; 
    });
  }

  addCity(): void {
    if (this.newCityName.trim()) {
      const result = this.cityService.addCity(this.newCityName.trim());
      if (result.success) {
        this.cities = this.cityService.getCities();  
        this.newCityName = '';
        this.errorMessage = '';
      } else {
        this.errorMessage = result.message!;
      }
    }
  }

  deleteCity(name: string): void {
    this.cityService.deleteCity(name);
    this.cities = this.cityService.getCities();  
  }

  filterCities(): void {
    this.cities = this.cityService.filterCities(this.filterQuery); 
  }
}
