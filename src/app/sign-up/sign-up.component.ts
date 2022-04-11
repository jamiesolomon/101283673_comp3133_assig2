import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

const AddUser = gql`
mutation AddUser(
  $username: String!
  $firstname: String!
  $lastname: String!
  $email: String!
  $password: String!
  $type: String!
) {
  addUser(
    username: $username
    firstname: $firstname
    lastname: $lastname
    email: $email
    password: $password
    type: $type
  ) {
    username
  }
}

`

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private apollo: Apollo, private router: Router) { }
  username: string = '';
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  admin: boolean = false;
  type: string = '';


  addUser() {
    this.apollo.mutate({
      mutation: AddUser,
      variables: {
        username: this.username, firstname: this.firstname, lastname: this.lastname,
        email: this.email, password: this.password, type:  this.admin ? 'admin' : 'user'
      }
    }).subscribe((e) => {
      console.log(e);
      this.router.navigate(['view-all-listings'])
    });
  }

  ngOnInit(): void {

  }


}
