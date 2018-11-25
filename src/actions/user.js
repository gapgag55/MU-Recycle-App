import firebase from 'react-native-firebase';
const database = firebase.database();
const auth = firebase.auth();

/* Action Types */
export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

/* Action Creators */
export function getUser() {
  const uid = AsyncStorage.getItem('userId');
  return dispatch => {
    const user = database.ref(`/users/${uid}`);
    user.on('value', (snapshot) => {
      dispatch({type: GET_USER, user: {
        id: uid,
        ...snapshot.val()
      }})
    });
  }
}

export function setUser({email, password, fullname, type}) {
  return dispatch => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(({user}) => {
      const {email} = user._user;
      const data = {
        email,
        fullname,
        point: 0,
        type,
        // fcmToken
      };

      const userRef = database.ref(`/users/${user.uid}`)
      userRef.set(data);

      dispatch({type: SET_USER, user: {
        id: user.uid,
        ...data
      }});
      // AsyncStorage.setItem('userId', user._user.uid)
    });
  }
}

export function removeUser() {
  return { type: REMOVE_USER };
}