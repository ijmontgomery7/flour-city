import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mainDisplay = true;

  click(): void {
    location.href = 'https://github.com/ijmontgomery7/flour-city'
  }
}
