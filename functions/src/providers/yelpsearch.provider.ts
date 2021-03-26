import { ISearchProvider } from "../abstractions/searchprovider.interface";
import { GraphQLClient, gql } from 'graphql-request'
import * as functions from "firebase-functions";

export class YelpSearchProvider implements ISearchProvider {

  private graphQLClient: GraphQLClient;
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'https://api.yelp.com/v3/graphql';

    this.graphQLClient = new GraphQLClient(this.baseUrl, {
      headers: {
        authorization: `Bearer ${functions.config().yelp.key}`,
      },
    })
  }

  searchByLatLong(lat: string, long: string, rad: string, price_range: string, is_urgent: string, open_to_all: boolean, neutral_restrooms: boolean, wheelchair_accessible: boolean): Promise<any> {

    let attributes: string[] = [];
    if (open_to_all) {
      attributes.push('\"open_to_all\"');
    }
    if (neutral_restrooms) {
      attributes.push('\"gender_neutral_restrooms\"');
    }
    if (wheelchair_accessible) {
      attributes.push('\"wheelchair_accessible\"');
    }

    functions.logger.log('Starting Yelp Search');
    const query = gql`{
      search(latitude: ${lat}, longitude: ${long}, radius: ${rad}, limit: 50, term: "restaurant", price: \"${price_range}\", open_now: ${is_urgent}, attributes: [${attributes}]) {
        total
        business {
          name
          is_closed
          url
          phone
          display_phone
          categories {
            title
          }
          review_count
          rating
          price
          photos
          location {
            city
            state
          }
          coordinates {
            latitude
            longitude
          }
        }
      }
    }`
    
    return this.graphQLClient.request(query);
  }
}