import { Component } from '@angular/core';
<<<<<<< HEAD
import { bookings } from 'src/app/models/bookings.model';
import { users } from 'src/app/models/users.model';
=======
>>>>>>> e413b4bfc2fa02686489153c33798a90163879ad

@Component({
  selector: 'app-usersview',
  templateUrl: './usersview.component.html',
<<<<<<< HEAD
  styleUrls: ['./usersview.component.scss'],
})
export class UsersviewComponent {
  userBookings!: bookings[];
  currentUser!: users;
  ngOnInit() {
    const sessionString = localStorage.getItem('session');
    const session = JSON.parse(sessionString as string);

    this.currentUser = session.user;

    this.getUserAppointments(this.currentUser.idusers);
  }

  async getUserAppointments(id: number) {
    try {
      const res = await fetch(
        `http://localhost:8000/api/bookings/user-bookings/${id}`
      );
      const bookings = await res.json();

      this.userBookings = bookings.bookings;
    } catch (error) {
      console.log(error);
    }
  }
=======
  styleUrls: ['./usersview.component.scss']
})
export class UsersviewComponent {

>>>>>>> e413b4bfc2fa02686489153c33798a90163879ad
}
