import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { UserService } from 'src/app/services/user.service';
import * as UserActions from '../../actions/user.actions'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username: string;
  constructor(public store: Store<AppState>, public router: Router, public userService: UserService, private toastr: ToastrService) { }
  user;
  ngOnInit(): void {
    const user$ = this.store.select('user').pipe(take(1))
    user$.subscribe(userFromStore => {
      this.user = userFromStore;
    })
  }

  async onSubmit() {
    await this.store.dispatch(new UserActions.updateUser({ ...this.user, name: this.username }))
    this.toastr.success(`Successfuly Changed Your Name To: ${this.username}`)


    this.router.navigateByUrl('/')

  }

}
