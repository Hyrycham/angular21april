import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../../models/iUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users-choose-form-reactive',
  templateUrl: './users-choose-form-reactive.component.html',
  styleUrls: ['./users-choose-form-reactive.component.scss']
})
export class UsersChooseFormReactiveComponent implements OnInit {
  @Input() users: IUser[];

    customValidator(control: AbstractControl) {
    // if ((control.value < 0)||((control.value >8))) {
      if (!(control.value)||(control.value < 0)||((control.value >10))) {
      return {alarm: 'id>10 or id<0'}
    }
    return null
  };


  id = new FormControl(null,
    [Validators.min(2), Validators.max(9),this.customValidator],
  );

  myForm: FormGroup = new FormGroup({
    id: this.id,
  });

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,) {

  }

  ngOnInit(): void {
    // console.log(this.myForm.controls.id)
  }

  save() {

            this.router.navigate([this.id.value],
        {relativeTo: this.activatedRoute,
          state:this.users.find(val => {return (val.id==this.id.value)}) })

  }
}
