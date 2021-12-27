import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


import { IUser } from './interfaces/IUser';
import { IUserFormGroup } from './interfaces/IUserFormGroup';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: ['td { padding:5px }']
})
export class ReactiveFormComponent implements OnInit {
  myData: IUser;
  form: IUserFormGroup;
  userTypeList = ['Admin','Staff']
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [''],
      password: [''],
      email:[''],
      userType:[''],
      rating: [60, [Validators.required, Validators.max(10)]]
    }) as IUserFormGroup;
    this.myData = { username: 'Aart',email:'test@test.com', password: 'password!', userType:'Admin',rating: 5 };
    this.form.patchValue(this.myData);
  }

  saveUser(): void {
    if(this.form.valid){
      const userToSave: IUser = this.form.value;
      console.log(userToSave);
    }else{
      console.log(this.form);
    }
  }
}