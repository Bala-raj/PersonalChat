
import * as firebase from 'firebase';

// should go in a secret file
const config = {
  apiKey: 'AIzaSyBUZvKx36GxGyrUVl3Lg2Dnza3hzAW4J5s',
  authDomain: 'xfire-e1bf4.firebaseapp.com',
  databaseURL: 'https://xfire-e1bf4.firebaseio.com',
  projectId: 'xfire-e1bf4',
  storageBucket: 'xfire-e1bf4.appspot.com',
  messagingSenderId: '156842240969',
};
firebase.initializeApp(config);

export default firebase;
