import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: number = 0;

  setValue(input: string) {
    this.value = +input;
    console.log(this.value);
  }

  // list etudiants

  sliderOneClicked(event: string) {
    console.log(event);
    this.value = +event;
  }

  sliderTwoClicked(event: string) {
    console.log(event);
    this.value = +event;
  }

  sliderThreeClicked(event: string) {
    console.log(event);
    this.value = +event;
  }
}
