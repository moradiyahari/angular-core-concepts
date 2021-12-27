import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'user-rating',
  templateUrl: 'user-rating.component.html',
  styleUrls: ['user-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: UserRatingComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: UserRatingComponent,
    },
  ],
})
export class UserRatingComponent implements ControlValueAccessor, Validator {
  quantity = 0;
  @Input() increment: number;

  onChange = (quantity) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  onAdd() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity += this.increment;
      this.onChange(this.quantity);
    }
  }

  onRemove() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity -= this.increment;
      this.onChange(this.quantity);
    }
  }

  writeValue(quantity: number) {
    this.quantity = quantity;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate(control: AbstractControl) {
    const quantity = control.value;
    let errors : any = {};
    if (quantity <= 0) {
      errors = {
        mustBePositive: {
          quantity,
        },
      };
    }
    return errors;
  }
}
