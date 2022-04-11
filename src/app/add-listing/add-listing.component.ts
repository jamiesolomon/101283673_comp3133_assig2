import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

const AddListing = gql`
mutation AddListing(
  $listing_id: String!
  $listing_title: String!
  $description: String!
  $street: String!
  $city: String!
  $postal_code: String!
  $price:Float!
  $email: String!
  $username: String!
) {
  addListing(
    listing_id: $listing_id
    listing_title: $listing_title
    description: $description
    street: $street
    city: $city
    postal_code: $postal_code
    price: $price
    email: $email
    username: $username
  ) {
    listing_id
  }
}
`

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  constructor(private apollo: Apollo, private router: Router) { }
  listing_id: String = "";
  listing_title: String = "";
  description: String = "";
  street: String = "";
  city: String = "";
  postal_code: String = "";
  price: String = "";
  email: String = "";
  username: String = "";

  addListing() {
    this.apollo.mutate({
      mutation: AddListing,
      variables: {
        listing_id: this.listing_id, listing_title: this.listing_title, description: this.description, street: this.street, 
        city: this.city, postal_code: this.postal_code, price: +this.price, email: this.email, username: this.username
      }
    }).subscribe((e) => {
      console.log(e);
      if(e.data)
      {
      this.router.navigate(['view-all-listings'])
      }
    });
  }




  ngOnInit(): void {
  }

}
