import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [FormsModule, CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
  city: string = '';
  weatherData: any = null;
  error: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    if (!this.city.trim()) {
      this.error = 'Please enter a city name';
      return;
    }
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.error = '';
      },
      error: (err) => {
        this.error = 'Failed to fetch weather data';
        this.weatherData = null;
      }
    });
  }
}
