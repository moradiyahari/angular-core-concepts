import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html'
})
export class CustomInputComponent {
  @Input() form: any;
  @Input() controlName: string;
  @Input() id!: string;
  @Input() type!: string;
  @Input() label!: string;
}

