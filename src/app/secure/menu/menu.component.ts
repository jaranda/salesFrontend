import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input('user') user: User | undefined;

  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    this.authService.logout().subscribe(
      res => {
        this.router.navigate(['/login']);
      }
    );
  }
}
