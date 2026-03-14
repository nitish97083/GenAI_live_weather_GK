import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';import { Weather } from './weather/weather';
import { Facts } from './facts/facts';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Weather, Facts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
