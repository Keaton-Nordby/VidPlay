
import {onRequest} from "firebase-functions/https";
import * as logger from "firebase-functions/logger";

export const helloWorld = onRequest((request, response) => {
   logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });
