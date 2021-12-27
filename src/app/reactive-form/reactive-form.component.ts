import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


import { IUser } from './interfaces/IUser';
import { IUserFormGroup } from './interfaces/IUserFormGroup';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent implements OnInit {
  myData: IUser;
  form: IUserFormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    }) as IUserFormGroup;

    this.myData = { username: 'Aart', password: 'password!' };

    this.form.patchValue(this.myData);
  }

  saveUser(): void {
    const userToSave: IUser = this.form.value;
    console.log(`Username: ${userToSave.username},Password ${userToSave.password} `);
  }
}