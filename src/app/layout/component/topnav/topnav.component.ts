import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent {
  constructor(private router: Router) {}
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  isDoctor: boolean = false;
<<<<<<< HEAD
  isUser: boolean = false;

  ngOnInit() {
    const sessionString = localStorage.getItem('session');
    const session = JSON.parse(sessionString as string);

=======
  ngOnInit() {
    const sessionString = localStorage.getItem('session');
    const session = JSON.parse(sessionString as string);

>>>>>>> e413b4bfc2fa02686489153c33798a90163879ad
    if (session.isAdmin) {
      this.isAdmin = true;
    }

    if (session.isDoctor) {
      this.isDoctor = true;
    }

    if (session.ok) {
      this.isLoggedIn = true;
    }
<<<<<<< HEAD

    if (this.isAdmin === false && this.isDoctor === false) {
      this.isUser = true;
    }
=======
>>>>>>> e413b4bfc2fa02686489153c33798a90163879ad
  }

  logout() {
    localStorage.removeItem('session');
    alert('User logged out');
    this.router.navigateByUrl('/login');
  }
}
