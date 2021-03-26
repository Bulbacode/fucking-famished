import * as functions from "firebase-functions";
import { ISearchProvider } from "../abstractions/searchprovider.interface";

export class SearchController {

  searchProvider: ISearchProvider;

  constructor(search: ISearchProvider) {

    functions.logger.log('Constructing Search Controller');

    this.searchProvider = search;
  }

  async searchByLatitudeLongitude(req: any, res: any) {

    let query = req.body.query;

    functions.logger.log(`Searching by Latitude - ${query.lat}, Longitude - ${query.long}, Radius - ${query.rad}`);

    try {

      functions.logger.log('Trying the request');
      
      let result = await this.searchProvider.searchByLatLong(query.lat, query.long, query.rad, query.price_range, query.is_urgent, query.open_to_all, query.neutral_restrooms, query.wheelchair_accessible);

      functions.logger.log(result);
        
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}