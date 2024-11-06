import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CityComponent } from './city/city.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CityComponent, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {}
