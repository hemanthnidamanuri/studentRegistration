import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ConfirmValidator } from './confirmValidator';
import { LocalStorage } from '@ngx-pwa/local-storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formdetails: FormGroup;
  passwordFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private localst: LocalStorage, private  router: Router) {
    this.passwordFormGroup = this.fb.group(
      {
        pwd: [
          '',
          [
            Validators.required,
            Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')
          ]
        ],
        cpwd: ['', Validators.required]
      },
      {
        validator: ConfirmValidator.validate.bind(this)
      }
    );
    this.formdetails = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      fname: ['', [Validators.required, Validators.maxLength(20)]],
      lname: [
        '',[Validators.required, Validators.maxLength(20)]
      ],
      dob: ['', Validators.required],
      mob: [
        '',
        [Validators.required,
        Validators.maxLength(10)]
      ],
      seq: ['', Validators.required],
      sans: ['', Validators.required],
      passwordFormGroup: this.passwordFormGroup
    });
  }
  ngOnInit() {}
  get fd() {
    return this.formdetails.controls;
  }

  onSubmit() {
    console.log(this.formdetails.value);
    if (this.formdetails.invalid) {
      console.log('form invalid');
    } else {
      console.log('form valid');
    }

    this.localst.setItem('user', this.formdetails.value).subscribe(() => {});
    this.router.navigate(['local']);
  }
}
