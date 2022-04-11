import { Component, OnInit } from '@angular/core';
import { Apollo, gql} from 'apollo-angular';
import { Subscription } from 'rxjs';

const ViewListings = gql`
query getListing{
  getListing{
    city
    street
    listing_id
    __typename
    description
    postal_code
    listing_title
    price
  }
}
`

@Component({
  selector: 'app-view-all-listings',
  templateUrl: './view-all-listings.component.html',
  styleUrls: ['./view-all-listings.component.css']
})
export class ViewAllListingsComponent implements OnInit {

  loading?: boolean;
  listings: any = [];

  private querySubscription?: Subscription;

  constructor(private apollo: Apollo) { }
  

  ngOnInit(): void {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: ViewListings
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.listings = data.getListing;
        console.log(data)
      });
  }


  ngOnDestroy(){
    if(this.querySubscription)
    {
      this.querySubscription.unsubscribe();
    }
    
  }

}
