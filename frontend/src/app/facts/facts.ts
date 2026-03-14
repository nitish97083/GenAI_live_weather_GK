import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facts',
  imports: [CommonModule],
  templateUrl: './facts.html',
  styleUrl: './facts.css',
})
export class Facts implements OnInit {
  fact: string = '';
  loading: boolean = false;

  constructor(private weatherService: WeatherService) {}

  getFact() {
    this.loading = true;
    this.weatherService.getFact().subscribe({
      next: (data) => {
        this.fact = data.fact;
        this.loading = false;
      },
      error: (err) => {
        this.fact = 'Failed to fetch fact';
        this.loading = false;
      }
    });
  }

  ngOnInit() {
    this.getFact();
  }
}
