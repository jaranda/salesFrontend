import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent {
  user!: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.user().subscribe(
      (res: any) =>{
        console.log(res)
        this.user = res.data;
      },
      err => {
        console.log(err);
        this.router.navigate(['/login']);
      }
    )
  }
}
