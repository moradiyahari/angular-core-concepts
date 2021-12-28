import { Component } from '@angular/core';

class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent {
  
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }


  newHero() {
    this.model = new Hero(42, '', '');
  }

  skyDog(): Hero {
    const myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value;
  }
}