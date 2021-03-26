import * as functions from "firebase-functions";
import { server } from './server';

export const api = functions.https.onRequest(server);
