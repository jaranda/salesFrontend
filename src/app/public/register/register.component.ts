import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../public.component.scss', './register.component.scss']
})
export class RegisterComponent {
  form!: FormGroup;

  constructor( private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: '',
      role: '1'
    });
  }

  submit() {
    const data = this.form.getRawValue()

    this.authService.register(data).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
