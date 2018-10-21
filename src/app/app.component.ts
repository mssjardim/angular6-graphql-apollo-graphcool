import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private apiURL = 'https://api.graph.cool/simple/v1/cjil4jc9c2xt90191zd4p3ngy';

  constructor(
    private apollo: Apollo
    ) {
    // this.createUser();
    this.allUsers();
  }

  allUsers(): void {

    this.apollo.query({
      query: gql`
      query {
        allUsers {
          id
          name
          email
        }
      }`
    }).subscribe(res => console.log('Query: ', res));
  }

  createUser(): void {

    const body = {
      query: `
        mutation CreateNewUser($name: String!, $email: String!, $password: String!) {
          createUser(name: $name, email: $email, password: $password) {
            id
            name
            email
          }
        }`,
        variables: {
          name: 'Black Panther',
          email: 'panther@avengers.com',
          password: '123456'
        }
    };

  }
}
