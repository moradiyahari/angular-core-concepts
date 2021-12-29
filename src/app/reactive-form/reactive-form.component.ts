import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


import { IUser } from './interfaces/IUser';
import { IUserFormGroup } from './interfaces/IUserFormGroup';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent implements OnInit {
  myData: IUser;
  form: IUserFormGroup;
  userTypeList = ['Admin','Staff']
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$')]],
      email:['',Validators.required],
      userType:['',Validators.required],
      rating: [0, [Validators.required, Validators.max(10)]]
    }) as IUserFormGroup;
   }

  ngOnInit(): void {
    this.myData = { username: 'Aart',email:'test@test.com', password: 'Passw0rd', userType:'Admin',rating: 0 };
  
    this.form.patchValue(this.myData);
    console.log(this.form);
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