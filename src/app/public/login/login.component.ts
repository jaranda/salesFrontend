import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../public.component.scss', './login.component.scss',]
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit() {
    const data: any = this.form.getRawValue();

    this.authService.login(data).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
