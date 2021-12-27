import { AbstractControl, FormGroup } from '@angular/forms';
import { IUser } from './IUser';

export interface IUserFormGroup extends FormGroup {
  value: IUser;
  controls: {
    username: AbstractControl;
    password: AbstractControl;
  };
}
