import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../public.component.scss', './login.component.scss',]
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit() {
    console.log(this.form.getRawValue())
  }
}
