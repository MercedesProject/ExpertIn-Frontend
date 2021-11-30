// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import store from './store';
import { getAuth, onAuthStateChanged } from "firebase/auth";

// https://firebase.google.com/docs/auth/web/manage-users
getAuth().onAuthStateChanged(function(user) {
  if (user) {
    store.commit(`user/USER_DETAILS`, user);
  } else {
    store.commit(`user/LOGOUT`);
  }
});