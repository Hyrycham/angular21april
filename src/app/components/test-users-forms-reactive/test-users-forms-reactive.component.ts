import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-test-users-forms-reactive',
  templateUrl: './test-users-forms-reactive.component.html',
  styleUrls: ['./test-users-forms-reactive.component.scss']
})
export class TestUsersFormsReactiveComponent implements OnInit {

  customValidator(control:AbstractControl){
    if (control.value.includes('duck')){
      return {achtung:'DUCK Present'}

}
    return null
  };


  username= new FormControl('vasya',
    [Validators.required,Validators.minLength(3),Validators.maxLength(8),this.customValidator],
    );
  password= new FormControl('1111',
    [Validators.required,Validators.minLength(3),Validators.maxLength(8)],
    );

myForm : FormGroup = new FormGroup({
  username: this.username,
  password:  this.password,


});

  constructor() { }

  ngOnInit(): void {
  }

  save() {
console.log(this.myForm)
  }
}
