import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html'
})
export class CustomInputComponent {
  @Input() id: string;
  @Input() label: string;
  @Input() type: string;
  @Input() controlName: string;

  @Input() form!: FormGroup;
}

