import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html'
})
export class CustomInputComponent {
  @Input() controlName: string;
  @Input() form!: any;
}

