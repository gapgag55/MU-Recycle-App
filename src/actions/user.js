import { AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';
const database = firebase.database();
const auth = firebase.auth();

/* Action Types */
export const GET_USER = 'GET_USER';
export const REMOVE_USER = 'REMOVE_USER';

/* Action Creators */
export function getUser() {
  return async dispatch => {
    const userId = await AsyncStorage.getItem('userId');
    const user =  database.ref(`/users/${userId}`);
    user.on('value', (snapshot) => {
      console.log(userId, snapshot.val());
      dispatch({
        type: GET_USER, user: {
          id: userId,
          ...snapshot.val()
        }
      });
    });
  }
}

export function createUser({ email, password, fullname, type }) {
  return dispatch => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        const { uid, email } = user._user;
        const data = {
          email,
          fullname,
          point: 0,
          type,
          // fcmToken
        };

        await AsyncStorage.setItem('userId', uid);

        const userRef = await database.ref(`/users/${uid}`)
        userRef.set(data);

        dispatch(getUser());
      });
  }
}

export function removeUser() {
  return async dispatch => {
    await AsyncStorage.removeItem('userId');
    dispatch({type: REMOVE_USER})
  };
}