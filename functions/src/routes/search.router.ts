import * as express from 'express';
import * as functions from "firebase-functions";
import { ISearchProvider } from '../abstractions/searchprovider.interface';
import { SearchController } from '../controllers/search.controller';

const searchRouter = express.Router();

// Search Routes
export function configureSearchRoutes(searchProvider: ISearchProvider): express.Router {

  functions.logger.log('Configuring search routes');

  const searchController: SearchController = new SearchController(searchProvider);

  // Define the search routers here
  searchRouter.post('/search', searchController.searchByLatitudeLongitude.bind(searchController));

  return searchRouter;
}