import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../shared/user';
import { UsersService } from '../shared/users.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  title: string;
  user: User = new User();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Edit User' : 'New User';

      if (!id)
        return;

      this.usersService.getUser(id)
        .subscribe(
          user => this.user = user,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
    
  }

  save(user) {
    var result,
        userValue = user;

    if (userValue.id){
      result = this.usersService.updateUser(userValue);
    } else {
      result = this.usersService.addUser(userValue);
    }

    result.subscribe(data => this.router.navigate(['users']));
  }
}
