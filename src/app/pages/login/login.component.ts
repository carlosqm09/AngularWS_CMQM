import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
    this.user = {
      username: '',
      password: '',
    };
  }

  login(): void {
    this.authenticationService
      .login(this.user.username, this.user.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/welcome']);
        },
        error: () => {
          this.snackBar.open('Invalid credentials', 'Close', {
            duration: 5000,
          });
        },
      });
  }
}