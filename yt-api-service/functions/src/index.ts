import * as functions from "firebase-functions";
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import {UserRecord} from "firebase-admin/auth";
import {logger} from "firebase-functions";

initializeApp();
const firestore = getFirestore();

export const createUser = functions.auth.user().onCreate(async (user: UserRecord) => {
  const userInfo = {
    uid: user.uid,
    email: user.email,
    photoUrl: user.photoURL,
    displayName: user.displayName || null,
  };

  try {
    await firestore.collection("users").doc(user.uid).set(userInfo);
    logger.info(`User Created: ${JSON.stringify(userInfo)}`);
  } catch (error) {
    logger.error("Error creating user document:", error);
  }
});
