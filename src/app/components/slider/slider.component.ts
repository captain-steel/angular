import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input()
  valueFromParent: string;

  @Output()
  clickEvent = new EventEmitter<string>();

  clicked() {
    this.clickEvent.emit(this.valueFromParent);
  }
}
