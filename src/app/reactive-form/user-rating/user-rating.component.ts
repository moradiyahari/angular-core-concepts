import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'user-rating',
  templateUrl: 'user-rating.component.html',
  styleUrls: ['user-rating.component.css'],
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
  rating = 0;
  @Input() increment: number;
  @Input() label!: string;
  onChange = (rating) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  onAdd() {
    this.markAsTouched();
    if (!this.disabled) {
      this.rating += this.increment;
      this.onChange(this.rating);
    }
  }

  onRemove() {
    this.markAsTouched();
    if (!this.disabled) {
      this.rating -= this.increment;
      this.onChange(this.rating);
    }
  }

  writeValue(rating: number) {
    this.rating = rating;
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
    const rating = control.value;
    let errors : any = {};
    if (rating <= 0) {
      errors = {
        mustBePositive: {
          rating,
        },
      };
    }
    return errors;
  }
}
