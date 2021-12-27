import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from './IUser';

export interface IUserFormGroup extends FormGroup {
  value: IUser;
  controls: {
    username: FormControl;
    password: FormControl;
  };
}
