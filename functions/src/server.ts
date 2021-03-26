import * as express from 'express';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { configureSearchRoutes } from './routes/search.router';
import { ISearchProvider } from './abstractions/searchprovider.interface';
import { YelpSearchProvider } from './providers/yelpsearch.provider';

export const server = express();

const searchProvider: ISearchProvider = new YelpSearchProvider();

// Global Middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(helmet());
server.use(cors({ origin: true }));

// Routes
server.use('/', configureSearchRoutes(searchProvider));